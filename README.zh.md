# xenforo-markdown

[English](./README.md) | 简体中文

`xenforo-markdown` 是 XenForo 论坛 Markdown 支持的一个替代方案。它并不依赖 XenForo 本身，只是通过控制元素的内容（比如把元素的原本内容换成解析后的内容）来实现对 Markdown 预览和显示的支持。目前只会影响发布主题和更新主题两个操作。

## 基本要求

- **与脚本相匹配的 XenForo**

比如说，脚本会自动把带有 `bbWrapper` 这个类的元素里的文本转换成 HTML 替换上去，而如果你的 XenForo 在这方面表现得不一样，比如这个 `bbWrapper` 在你的论坛上面不叫 `bbWrapper` 而是 `textWrapper`、`wrapper` 之类的话，脚本将不能正常工作。通常情况下的 XenForo 是与脚本相匹配的（因为写脚本也是以当前 XenForo 为参考的），除非有一些特别大的更新或者用上了对这方面有影响的主题。

如果不匹配，你需要手动修改脚本中相应的内容。

- JQuery, Showdown, Prism

JQuery 提供了一些对元素的基本操作，[Showndown](https://github.com/showdownjs/showdown) 用于 Markdown 解析，感谢 [#1](https://github.com/McShare/xenforo-markdown/issues/1) 的建议，[Prism](https://prismjs.com) 用于代码高亮。使用的时候请确保它们在 `xf-markdown.js` 之前加载完毕。

## 用法

这是一种让脚本运行的方法。

1. 下载 `xf-markdown.js`、`prism.js` 和 `markdown.css`，然后把它们放到你论坛的 `/js` 和 `/styles` 目录里。
    - **提示：** `prism.js` 本项目并没有提供，你可以到[这里](https://prismjs.com/download.html)下载一份。
    - **重要：** 如果你想要把 `prism.js` 和 `markdown.css` 放到别的地方，你需要手动修改 `xf-markdown.js` 的对应内容。
2. 前往后台里的 `外观 > 风格 & 模板 > 模板列表` 然后搜索 `PAGE_CONTAINER` 模板打开。
3. 把下面的内容修改后复制粘贴到模板中的某个位置。
    - **提示：** 建议放到整个模板的末尾来确保所有需要的脚本已经提前加载好了。

> 不要尝试用 Less loader 来加载项目中的 `markdown.less`，那样会导致有些论坛的布局出现问题（经过测试的结论）。

```html
<script src="/path/to/showdown.js"></script>
<!-- https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js -->
<script src="/path/to/xf-markdown.js"></script>
```

保存即可。

现在访问每个页面都会加载这两个脚本，不过 `xf-markdown.js` 只会在地址中有 `post-thread` 和 `threads/` 两个字符串时发挥作用，分别对应发帖和浏览帖子两个页面。写 Markdown 的时候，把内容放在 BBCode 类似的这样一个标签 `[MD][/MD]` 里即可。

```bbcode
[MD]
# Hello World!

这是用 Markdown 写的，你可以在预览和实际的帖子中看到效果。
[/MD]
这里不是 Markdown，你可以在这里用 BBCode 和富文本。
```

需要注意的是 `[MD][/MD]` 里的内容会被看做是纯文本，所以它们的富文本效果会被忽略。

## 优劣对比

优势

- 用起来写起来装起来都比较简单，因为不依靠任何 XenForo 的 API。
- 安装和卸载很容易而且没有残留。*不过不建议在跟你的用户说可以用 Markdown 以后卸载，因为这样所有的 `[MD][/MD]` 内容都会变为纯文本。*
- 拓展起来很方便，详见 [Showdown](https://github.com/showdownjs/showdown)。

劣势
- 因为这是用 JS 写的所以对于一些较大的数据处理起来会比较卡。
- 只是在前端将内容获取、转换然后替换，并没有做到和后端一样直接返回消息到前端来。这种方法说实话不是很好，显得有些多余，而且还会有性能问题。
- 如果网络或者设备比较慢是会有一段时间看到 `[MD][/MD]` 里的内容的。如果你有解决的思路可以提 PR 或者 Issue。