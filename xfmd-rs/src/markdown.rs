use std::fmt::format;
use crate::convert_raw_pre_code;
use crate::xss_filter_configurations::get_xss_filter_config;
use ammonia::Builder;
use maplit::hashset;
use pulldown_cmark::{Options, Parser, html};
use wasm_bindgen::JsValue;
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::js_sys::Array;
use web_sys::{HtmlElement, NodeList, console, window};

fn remove_first_return(from: &str) -> String {
    let mut s = from.to_string();

    if let Some(pos) = s.find('\n') {
        s.replace_range(pos..=pos, "");
    }

    s
}

fn recover_markup(raw: &str) -> String {
    raw.replace("\\[MD\\]", "[MD]")
        .replace("\\[/MD\\]", "[/MD]")
}

fn render_markdown_to_html(md: &str) -> String {
    let mut options = Options::empty();
    options.insert(Options::ENABLE_TABLES);
    options.insert(Options::ENABLE_GFM);

    let parser = Parser::new_ext(md, options);

    let mut html_out = String::new();
    html::push_html(&mut html_out, parser);

    html_out
}

pub fn get_markdown_result(raw_html: &str, raw_text: &str) -> Vec<String> {
    let mut results = vec![];

    let html_slice: Vec<&str> = raw_html.split("[MD]").collect();
    let text_slice: Vec<&str> = raw_text.split("[MD]").collect();

    let xss_filter_config = get_xss_filter_config();

    let mut ammonia_builder = Builder::new();
    ammonia_builder.tags(xss_filter_config.allowed_tags);
    ammonia_builder.tag_attributes(xss_filter_config.allowed_attrs_for_tags);
    ammonia_builder.generic_attribute_prefixes(hashset! {"data-"});

    for i in 0..html_slice.len() {
        let current_html = html_slice.get(i).unwrap_or(&"");
        let current_text = text_slice.get(i).unwrap_or(&"");

        if !current_html.contains("[/MD]") {
            results.push(recover_markup(&remove_first_return(current_html)));
            continue;
        }

        let html_parts: Vec<&str> = current_html.split("[/MD]").collect();
        let text_parts: Vec<&str> = current_text.split("[/MD]").collect();

        let md_html = render_markdown_to_html(&recover_markup(text_parts[0]));
        let clean_md = ammonia_builder.clean(&md_html).to_string();
        results.push(clean_md);

        let after_html = remove_first_return(html_parts.get(1).unwrap_or(&""));
        let clean_after = ammonia_builder
            .clean(&recover_markup(&*after_html))
            .to_string();
        results.push(clean_after);
    }

    results
}

#[wasm_bindgen]
pub fn process_elements(elements: &Array) -> Result<(), JsValue> {
    for i in 0..elements.length() {
        let el: HtmlElement = elements.get(i).into();
        let raw_html = el.inner_html();
        let raw_text = el.text_content().unwrap_or_default();
        let parts = get_markdown_result(&raw_html, &raw_text);
        let result = parts.join("");
        if result.trim().len() > 0 {
            el.set_inner_html(&result);
        } else {
            console::warn_1(&"[XFMD] Failed to render markdown content.".into());
        }
    }

    Ok(())
}

pub fn render_by_selector(selector: &str) -> Result<(), JsValue> {
    let window = window().expect("no window");
    let document = window.document().expect("no document");
    if let Ok(nodes) = document.query_selector_all(selector) {
        let arr = Array::from(&nodes);
        process_elements(&arr)?;
        convert_raw_pre_code(&arr);
    }

    Ok(())
}

pub fn render_by_element_array(nodes: &Array) -> Result<(), JsValue> {
    process_elements(nodes)?;
    convert_raw_pre_code(nodes);

    Ok(())
}

pub fn render_by_nodelist(nodes: &NodeList) -> Result<(), JsValue> {
    let arr = Array::from(&nodes.into());
    render_by_element_array(&arr)
}
