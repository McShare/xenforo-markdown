use maplit::hashset;
use std::collections::{HashMap, HashSet};

pub struct XssFilterConfig<'a> {
    pub allowed_tags: HashSet<&'a str>,
    pub allowed_attrs_for_tags: HashMap<&'a str, HashSet<&'a str>>,
}

pub fn get_xss_filter_config() -> XssFilterConfig<'static> {
    let allowed_tags = hashset! {
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "span",
        "b",
        "strong",
        "em",
        "i",
        "p",
        "center",
        "small",
        "iframe",
        "table",
        "td",
        "th",
        "thead",
        "tbody",
        "ul",
        "ol",
        "li",
        "img",
        "div",
        "blockquote",
        "hr",
        "br",
        "pre",
        "code",
        "a",
        "u"
    };

    let mut allowed_attrs_for_tags = HashMap::new();

    for tag in &allowed_tags {
        allowed_attrs_for_tags.insert(*tag, match *tag {
            "iframe" => hashset! {"name", "height", "width", "src", "referrerpolicy", "importance", "allow", "scrolling", "frameborder"},
            "input" => hashset! {"value", "type", "class", "id", "style"},
            "img" => hashset! {"src", "style", "class", "id", "alt", "title", "height", "weight", "loading"},
            "div" => hashset! {"style", "class", "title", "id"},
            "button" => hashset! {"type", "class", "id", "style"},
            "pre" => hashset! {"class", "id", "style", "dir"},
            "a" => hashset! {"href", "style", "class", "target", "title", "role", "tabindex"},
            "tr" | "hr" | "br" | "del" | "em" | "strong" | "b" | "s" => hashset! {},
            _ => hashset! {"id", "style" , "class", "role" ,"tabindex"}
        });
    }

    XssFilterConfig {
        allowed_tags,
        allowed_attrs_for_tags,
    }
}
