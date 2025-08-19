use crate::common::{get_document, get_location, log1};
use crate::markdown::{render_by_element_array, render_by_selector};
use maplit::{hashmap, hashset};
use regex::Regex;
use std::collections::HashSet;
use wasm_bindgen::closure::Closure;
use wasm_bindgen::{JsCast, JsValue};
use web_sys::js_sys::Array;
use web_sys::{
    Element, HtmlElement, MutationObserver, MutationObserverInit, MutationRecord, Node
    ,
};

pub fn get_selectors_by_location() -> HashSet<&'static str> {
    let location = get_location();
    let pathname = location.pathname().expect("no pathname");

    let match_map = hashmap! {
        r"^/threads/.*$" => hashset! {"article.message-body .bbWrapper", "aside.message-signature .bbWrapper"},
        r"^/pages/how-2-ask/?$" => hashset! {".p-body-pageContent .block-body.block-row"},
        r"^/resources/.*$" => hashset! {".resourceBody .bbWrapper"},
        r"^/resources/.*/updates/?$" => hashset! {".message-userContent .bbWrapper"},
        r"^/direct-messages/.*$" => hashset! {".message-userContent .bbWrapper"}
    };

    for key in match_map.keys() {
        let r = Regex::new(*key).expect("invalid regex");
        if r.is_match(pathname.as_str()) {
            return match_map.get(*key).unwrap().clone();
        }
    }

    // hashset! {}
    hashset! {"article.message-body .bbWrapper"}
}

pub fn should_observe() -> bool {
    return true;

    let location = get_location();
    let pathname = location.pathname().expect("no pathname");
    pathname.contains("post-thread")
        || pathname.contains("threads/")
        || pathname.contains("/edit")
        || pathname.contains("resources/")
        || pathname.contains("direct-messages/")
}

fn node_to_htmlelement(node: Node) -> Result<HtmlElement, Node> {
    node.dyn_into::<HtmlElement>()
}

fn element_to_htmlelement(element: Element) -> Result<HtmlElement, Element> {
    element.dyn_into::<HtmlElement>()
}

fn get_classname_from_dark_indicator(indicator: &HtmlElement) -> Option<&'static str> {
    let html = indicator.inner_html();

    if html.contains("fa-moon") {
        return Some("dark");
    } else if html.contains("fa-adjust") {
        return Some("darkauto");
    }

    None
}

fn get_classname_from_dark_indicator_auto() -> Option<&'static str> {
    let document = get_document();

    if let Ok(Some(element)) = document.query_selector("a[class*='js-styleVariationsLink']") {
        if let Ok(htmlelement) = element_to_htmlelement(element) {
            return get_classname_from_dark_indicator(&htmlelement);
        }
    }

    None
}

pub fn attach_observer() -> Result<(), JsValue> {
    let document = get_document();
    let body = document.body().expect("no body");

    let on_display_change = Closure::<dyn FnMut(Array, MutationObserver)>::new(
        move |mutations: Array, _observer: MutationObserver| {
            for i in 0..mutations.length() {
                let m: MutationRecord = mutations.get(i).unchecked_into(); // unchecked for speed
                if let Some(target) = m.target() {
                    if let Ok(element) = node_to_htmlelement(target) {
                        if element
                            .style()
                            .get_property_value("display")
                            .unwrap_or_default()
                            .is_empty()
                        {
                            render_by_selector(".xfPreview").expect("cannot render");
                        }
                    }
                }
            }
        },
    );

    let style_observer = MutationObserver::new(on_display_change.as_ref().unchecked_ref())?;
    let style_opts = MutationObserverInit::new();
    style_opts.set_attribute_filter(&Array::of1(&"style".into()));
    style_opts.set_attributes(true);
    on_display_change.forget();

    let main_closure = {
        let style_observer_js = style_observer.clone();

        Closure::<dyn FnMut(Array, MutationObserver)>::new(
            move |mutations: Array, _observer: MutationObserver| {
                for i in 0..mutations.length() {
                    let m: MutationRecord = mutations.get(i).unchecked_into(); // unchecked for speed

                    let added_nodes = m.added_nodes();

                    if added_nodes.length() == 0 {
                        continue;
                    }

                    for j in 0..added_nodes.length() {
                        if let Some(updated_node) = added_nodes.item(j) {
                            if let Ok(target) = node_to_htmlelement(updated_node) {
                                let class_list = target.class_list();
                                if class_list.contains("xfPreview") {
                                    let _ = style_observer_js
                                        .observe_with_options(target.as_ref(), &style_opts);
                                }

                                if class_list.contains("message--conversationMessage")
                                    || class_list.contains("message--post")
                                {
                                    if let Ok(Some(tg_content_wrapper)) =
                                        target.query_selector("article.message-body")
                                    {
                                        if let Some(dark_class_name) =
                                            get_classname_from_dark_indicator_auto()
                                        {
                                            tg_content_wrapper
                                                .class_list()
                                                .add(&Array::of1(&dark_class_name.into()))
                                                .unwrap_or_else(|_| {
                                                    log1("无法为新增的元素添加黑暗模式class")
                                                })
                                        }
                                    }

                                    if let Ok(Some(tg_content)) =
                                        target.query_selector("article.message-body .bbWrapper")
                                    {
                                        if let Ok(el) = element_to_htmlelement(tg_content) {
                                            render_by_element_array(&Array::of1(&el)).expect("cannot render");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        )
    };

    let target_el: HtmlElement = 'a: {
        let location = get_location();

        if let Ok(pathname) = location.pathname() {
            if pathname.contains("threads/") || pathname.contains("direct-messages/") {
                if let Ok(Some(target)) = document.query_selector(".p-body-pageContent") {
                    if let Ok(target_el) = element_to_htmlelement(target) {
                        break 'a target_el;
                    }
                }
            }
        }

        body.clone()
    };

    let main_opts = MutationObserverInit::new();
    main_opts.set_child_list(true);
    main_opts.set_subtree(true);
    main_opts.set_attributes(false);
    main_opts.set_character_data(false);

    let main_observer = MutationObserver::new(main_closure.as_ref().unchecked_ref())?;

    let _ = main_observer.observe_with_options(&target_el, &main_opts);

    main_closure.forget();

    Ok(())
}
