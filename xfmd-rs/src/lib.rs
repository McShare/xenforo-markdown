mod common;
mod markdown;
mod observer;
mod xss_filter_configurations;

use crate::markdown::render_by_nodelist;
use crate::observer::{attach_observer, get_selectors_by_location, should_observe};
use wasm_bindgen::prelude::*;
use web_sys::js_sys::Array;
use web_sys::window;
use crate::common::log1;
extern crate console_error_panic_hook;
use std::panic;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(a: &str);

    #[wasm_bindgen(js_name = convertRawPreCode)]
    fn convert_raw_pre_code(nodes: &Array);
}

#[wasm_bindgen]
pub fn run() -> Result<(), JsValue> {
    panic::set_hook(Box::new(console_error_panic_hook::hook));

    let window = window().expect("no window");
    let document = window.document().expect("no document");
    let target_selectors = get_selectors_by_location();

    for selector in target_selectors {
        if let Ok(target_elements) = document.query_selector_all(selector) {
            log1(format!("rendering {} elements", target_elements.length()).as_str());
            render_by_nodelist(&target_elements)?;
        }
    }

    if should_observe() {
        attach_observer()?;
    }

    Ok(())
}
