# xenforo-markdown

`xenforo-markdown` is an alternative solution to enable markdown support in XenForo. Not depending on XenForo itself, it make markdown possible by controlling DOM element (e.g. replace `innerHTML` with rendered one) and observing the element behaviour when posting a thread, updating or editing a post which is capable of Markdown. 

## Requirements

- **A XenForo instance of which behaviour matches the observer in the script.**

For example, the script will render the markdown text to HTML on an element that has a class called `bbWrapper`, which is considered a standard when developing this script. If your XenForo instance uses another set of classes (e.g. `text-wrapper`, `wrapper` etc.) to arrange the elements' front-end behaviours, they won't be selected as expected because the class name can't match.

Mismatching will cause the script failed to work, and you might have to alter the corresponding content in the script by your own to make it work. 

- JQuery

This script depends on JQuery to work. Please make sure JQuery is loaded before `xenforo-markdown`. You could just put the scripts in a certain order.

- markdown-it

The markdown rendering ability is provided by [markdown-it](https://github.com/markdown-it/markdown-it). Please make sure markdown-it is loaded before `xenforo-markdown`.

- Prism

The highlighting ability is provided by [Prism](https://prismjs.com) and it is not optional. Please make sure Prism is loaded before `xenforo-markdown`.

## Usage

Here is one of the approaches to make the script work in your forum. First download `xf-markdown.js` and `markdown.css` and put them into a place you like. Then go to `Appearance > Styles & Templates > Templates` then search and open `PAGE_CONTAINER` template. Create `link` and `script` that links to where the js and css is. Note that it is recommended to put these at the bottom of the file to make sure all the scripts in need are loaded beforehand.

> Please do not use `markdown.less` + the less loader, which will make breaking changes to your website. (saying this according to tests)

```html
<link rel="stylesheet" href="/path/to/markdown.css"/>
<script src="/path/to/markdown-it.js"></script>
<!-- You could use https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.1.0/markdown-it.min.js -->
<script src="/path/to/prism.js"></script>
<!-- Prism is highly customizable. You could customize it and download the version you want at https://prismjs.com -->
<script src="/path/to/xf-markdown.js"></script>
```

Click Save button to save changes. Now the scripts will be loaded in every page of your forum. However, `xenforo-markdown` will only act when `location.href` includes `post-thread` or `threads/`, which refers to the thread posting page and thread viewing page.

To write your post in Markdown, just put your contents into a BBCode-like structure `[MD][/MD]`.

```bbcode
[MD]
# Hello World!

This is written in Markdown and your will see it in Preview and your final post.
[/MD]
This is not markdown now! You can use BBCode and RTF here.
```

All the text in `[MD]` section will be seen as markdown raw text, and their original format will be ignored. For instance, if you apply the Bold format to the contents covered with `[MD]` label using RTF functions provided by XenForo, the format will be ignored.

## Pros and Cons

Pros

- Easy to use, develop and refactor as it is written in JavaScript and does not access any XenForo apis.
- Easy to install and uninstall. *However it's a bad idea to uninstall it after you tell your users to use markdown. All the content in `[MD]` will become uncovered!*
- Easy to configure and extend. See more at [markdown-it](https://markdown-it.github.io/markdown-it/)

Cons
- Maybe laggy on some forum or some post which has numerous information, as it's JavaScript.
- It changes the original content and depends on the original content to render. That is, the content is replaced in a way that seemed unnecessary. If it is an addon of XenForo, maybe it's possible to directly return the rendered content to front-end. However, the api doesn't seem to be easy to use in this aspect.
- The source code of Markdown will appear in some laggy situations or devices, as the script needs time to render and control the DOM, which breaks (slightly) the user experience.
