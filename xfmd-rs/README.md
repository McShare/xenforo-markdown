# xfmd-rs [Deprecated]

According to our test, the optimized Web Assembly version of xenforo-markdown has no performance improvement (criterion being render time) compared to the vanilla JS version and embarrassingly maintains large package size (~3MB+ `wasm-opt`ed, almost 7x larger), thus deprecated.

Rust编写的wasm在经过优化后，其速度相比于纯js依然没有任何优势，并且包的体积增大，故xenforo-markdown的Rust版本不再继续维护。
