import {run} from './pkg';
import Prism from 'prismjs';
import './styles/global.scss';

function convertRawPreCode(elements: HTMLElement[]) {
    elements.forEach(el => {
        el.innerHTML = el.innerHTML
            .replace(/<pre(.*?)class="(\w+)"(.*?)data-lang="(\w+)"(.*?)><code>((.|\n)*?)<\/code><\/pre>/g, `<pre$1class="$2 language-$4"$3data-lang="$4"$5><code class="language-$4">$6</code></pre>`)
            .replace(/<pre><code class=".*?language-(\w+).*?">((.|\n)*?)<\/code><\/pre>/g, `<div class="bbCodeBlock bbCodeBlock--screenLimited bbCodeBlock--code"><div class="bbCodeBlock-title">$1:</div><div class="bbCodeBlock-content"><pre class="bbCodeCode line-numbers language-$1"><code class="language-$1">$2</code></pre></div></div>`)
        Prism.highlightAllUnder(el);
    });
}

(async () => {
    Object.defineProperty(window, 'convertRawPreCode', {
        value: convertRawPreCode
    });
    console.time('render');
    run();
    console.timeEnd('render');
})();