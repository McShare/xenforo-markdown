# xenforo-markdown

English | [简体中文](./README.zh.md)

`xenforo-markdown` is an alternative solution to enable markdown support in XenForo. Not depending on XenForo itself, it make markdown possible by observing the element behaviour (e.g. a new `div` appeared after posting a new reply) and editing DOM element (e.g. replace element's `innerHTML` with rendered one).

## XenForo Requirements

The behaviour of your XenForo instance must match.

For example, `xenforo-markdown` will render the markdown text to HTML on `.bbWrapper`, which is considered a standard when developing this script. If your XenForo instance uses another set of classes (e.g. `text-wrapper`, `wrapper` etc.) to arrange the elements, they won't be selected as expected because the class name doesn't match, and you may need to read the code and edit it to meet your actual situation.

## Usage

**Before you really start to use xenforo-markdown, please consider reading [Important Notes](./important-notes.md) to make sure everything satisfies your expectation.**

Here is one of the approaches to make the script work in your forum. Simply, it's just loading the script on every page of your forum.

1. Download required script and style sheets from [Actions](https://github.com/McShare/xenforo-markdown/actions) and put them into somewhere that you can access by URL directly.
2. Go to `Appearance > Styles & Templates > Templates` then search & open the `PAGE_CONTAINER` template.
3. Edit the content below to meet your need, and put it into the template content.

```html
<link rel="stylesheet" href="/path/to/markdown.min.css"/>
<script src="/path/to/xf-markdown.min.js"></script>
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

## Building

The browser-runnable script is generated from the source file written in TypeScript (`xf-markdown.ts` at root dir) by esbuild.

To create a new build, please ensure that you have [`uglify-js`](https://github.com/mishoo/UglifyJS), [`lessc`](https://lesscss.org/usage/) and [`esbuild`](https://esbuild.github.io/) installed locally on your computer. You could install them by command.

```sh
npm i uglify-js less esbuild -g
```

Then run `build` command defined in `package.json`.

```sh
npm run build
```

Files generated then in `dist` includes

- `xf-markdown.js` - The bundled & compiled browser-runnable JavaScript file.
- `xf-markdown.min.js` - (*recommended* as faster) The minified & mangled browser-runnable JavaScript file.
- `xf-markdown.min.css` - The minified css generated from `markdown.less`.

You can also simply download artifacts built automatically every commit from [Actions](https://github.com/McShare/xenforo-markdown/actions).
## Pros and Cons

Pros

- Easy to use, develop and refactor as it is written in JavaScript and does not access any XenForo apis.
- Easy to install and uninstall. *However it's a bad idea to uninstall it after you tell your users to use markdown. All the content in `[MD]` will become uncovered!*
- Easy to configure and extend. See more at [Showdown](https://github.com/showdownjs/showdown).

Cons
- Maybe laggy on some forum or some post which has numerous information, as it's JavaScript.
- It changes the original content and depends on the original content to render. That is, the content is replaced in a way that seemed unnecessary. If it is an addon of XenForo, maybe it's possible to directly return the rendered content to front-end. However, the api doesn't seem to be easy to use in this aspect.
- The source code of Markdown will appear in some laggy situations or devices, as the script needs time to render and control the DOM, which breaks (slightly) the user experience.
