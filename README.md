# xenforo-markdown

English | [简体中文](./README.zh.md)

`xenforo-markdown` is an alternative solution to enable markdown support in XenForo. Not depending on XenForo itself, it make markdown possible by controlling DOM element (e.g. replace `innerHTML` with rendered one) and observing the element behaviour when posting a thread, updating or editing a post which is capable of Markdown. 

## Requirements

- **A XenForo instance of which behaviour matches the observer in the script.**

For example, `xenforo-markdown` will render the markdown text to HTML on `.bbWrapper`, which is considered a standard when developing this script. If your XenForo instance uses another set of classes (e.g. `text-wrapper`, `wrapper` etc.) to arrange the elements, they won't be selected as expected because the class name doesn't match, and you may need to read the code and edit it to meet your actual situation.

- JQuery

This script depends on JQuery to work. You could just put the scripts in a certain order.

- Showdown

The markdown rendering ability is provided by [Showndown](https://github.com/showdownjs/showdown). Thanks for the advice from [#1](//github.com/McShare/xenforo-markdown/issues).

- Prism

The highlighting ability is provided by [Prism](https://prismjs.com).

- XSS

Some part of XSS prevention ability is provided by [js-xss](https://github.com/leizongmin/js-xss).

**Please make sure all of above is are loaded before `xf-markdown.js`, regardless of order. Missing of any of them will cause failure.**

## Usage

Here is one of the approaches to make the script work in your forum.

1. Download `xf-markdown.js` and put it into somewhere that you can access by URL directly.
2. Go to `Appearance > Styles & Templates > Templates` then search & open the `PAGE_CONTAINER` template.
3. Edit the content below to meet your need, and put it into the template content.
    - **Note:** It is recommended to put these at the bottom of the template content to make sure all the scripts in need are loaded beforehand.

> Please do not use `markdown.less` + the less loader, which will make breaking changes to your website. (saying this according to tests)

```html
<script src="/path/to/showdown.js"></script>
<script src="/path/to/prism.js"></script>
<script src="/path/to/xss.js"></script>
<link rel="stylesheet" href="/path/to/markdown.css"/>
<!-- https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js -->
<script src="/path/to/xf-markdown.js"></script>
```

Click Save button to save changes. 

Now the scripts will be loaded in every page of your forum. However, `xenforo-markdown` will only act when `location.href` includes `post-thread`, `threads/`, and some other keywords (see in code) which refers to the thread posting page, thread content page and others.

To write your post in Markdown, just put your contents into a BBCode-like structure `[MD][/MD]`.

```bbcode
[MD]
# Hello World!

This is written in Markdown and your will see it in Preview and your final post.
[/MD]
This is not markdown now! You can use BBCode and RTF here.
```

All the text in `[MD]` section will be seen as markdown raw text, and their original format will be ignored. For instance, if you apply the **Bold** format to the contents covered with `[MD]` label using Rich Text Format functions provided by XenForo, the format will be ignored.

## Pros and Cons

Pros

- Easy to use, develop and refactor as it is written in JavaScript and does not access any XenForo apis.
- Easy to install and uninstall. *However it's a bad idea to uninstall it after you tell your users to use markdown. All the content in `[MD]` will become uncovered!*
- Easy to configure and extend. See more at [Showdown](https://github.com/showdownjs/showdown).

Cons
- Maybe laggy on some forum or some post which has numerous information, as it's JavaScript.
- It changes the original content and depends on the original content to render. That is, the content is replaced in a way that seemed unnecessary. If it is an addon of XenForo, maybe it's possible to directly return the rendered content to front-end. However, the api doesn't seem to be easy to use in this aspect.
- The source code of Markdown will appear in some laggy situations or devices, as the script needs time to render and control the DOM, which breaks (slightly) the user experience.
