use web_sys::{window, Document, Location};
use web_sys::console::log_1;

pub fn get_document() -> Document {
    let window = window().expect("no window");
    let document = window.document().expect("no document");
    document
}

pub fn get_location() -> Location {
    let window = window().expect("no window");
    window.location()
}

pub fn log1(a: &str) {
    log_1(&a.into());
}