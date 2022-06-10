# xenforo-markdown

[English](./README.md) | 简体中文

`xenforo-markdown` 是 XenForo 论坛 Markdown 支持的一个替代方案。它并不依赖 XenForo 本身，只是通过控制元素的内容（比如把元素的原本内容换成解析后的内容）来实现对 Markdown 预览和显示的支持。目前只会影响发布主题和更新主题两个操作。

## 对 XenForo 的要求

要使脚本正常工作，你的 XenForo 上对内容的呈现方式必须与脚本实现的逻辑相匹配。

比如说，脚本会自动把带有 `bbWrapper` 这个类的元素里的文本转换成 HTML 替换上去，而如果你的 XenForo 在这方面表现得不一样，比如这个 `bbWrapper` 在你的论坛上面不叫 `bbWrapper` 而是 `textWrapper`、`wrapper` 之类的话，脚本将不能正常工作。通常情况下的 XenForo 是与脚本相匹配的（因为写脚本也是以当前 XenForo 为参考的），除非有一些特别大的更新或者用上了对这方面有影响的主题。如果类名等不匹配，你可能需要手动修改脚本中相应的内容。

## 用法

下面简单介绍了基本的安装方法，本质上就是让页面总是加载该脚本。

1. 从 [Actions](https://github.com/McShare/xenforo-markdown/actions) 处下载最新的构建后解压，将所需的文件放到一个可以用直链访问的地方。
2. 前往后台里的 `外观 > 风格 & 模板 > 模板列表` 搜索 `PAGE_CONTAINER` 模板打开。
3. 把下面的内容修改后复制粘贴到模板中的某个位置。

```html
<link rel="stylesheet" href="/path/to/markdown.min.css"/>
<script src="/path/to/xf-markdown.min.js"></script>
```

保存即可。

现在访问每个页面都会加载该脚本，不过脚本只会在地址中有 `post-thread`、`threads/` 或者其它几个关键字（详见代码）的时候发挥作用，分别对应发帖和浏览帖子等页面。写 Markdown 的时候，把内容放在 BBCode 类似的这样一个标签 `[MD][/MD]` 里即可。

```bbcode
[MD]
# Hello World!

这是用 Markdown 写的，你可以在预览和实际的帖子中看到效果。
[/MD]
这里不是 Markdown，你可以在这里用 BBCode 和富文本。
```

需要注意的是 `[MD][/MD]` 里的内容会被看做是纯文本，所以它们的富文本效果会被忽略。

## 构建

`xf-markdown.min.js` 等可以在浏览器中直接运行的 JS 是从根目录中的 `xf-markdown.ts` 编译打包而来。

要创建一个新的构建，请先确保你的电脑上全局安装了[`uglify-js`](https://github.com/mishoo/UglifyJS)、[`lessc`](https://lesscss.org/usage/) 和 [`esbuild`](https://esbuild.github.io/)。如果没有可以用以下指令安装。

```sh
npm i uglify-js less esbuild -g
```

然后运行 `package.json` 里预先写好的 `build` 指令即可。

```sh
npm run build
```

运行后会在 `dist` 文件夹里生成以下文件：

- `xf-markdown.js` - 打包和编译后的可以在浏览器中直接运行的 JS 文件
- `xf-markdown.min.js` - (更快，推荐) 在原文件的基础上压缩并混淆之后的 JS 文件
- `xf-markdown.min.css` - 压缩后的 CSS 文件，由 `markdown.less` 编译而来

你也可以在 [Action 页面](https://github.com/McShare/xenforo-markdown/actions)下载到每次提交后自动构建的版本。
## 优劣对比

优势

- 用起来写起来装起来都比较简单，因为不依靠任何 XenForo 的 API。
- 安装和卸载很容易而且没有残留。*不过不建议在跟你的用户说可以用 Markdown 以后卸载，因为这样所有的 `[MD][/MD]` 内容都会变为纯文本。*
- 拓展起来很方便，详见 [Showdown](https://github.com/showdownjs/showdown)。

劣势
- 因为这是用 JS 写的所以对于一些较大的数据处理起来会比较卡。
- 只是在前端将内容获取、转换然后替换，并没有做到和后端一样直接返回消息到前端来。这种方法说实话不是很好，显得有些多余，而且还会有性能问题。
- 如果网络或者设备比较慢是会有一段时间看到 `[MD][/MD]` 里的内容的。如果你有解决的思路可以提 PR 或者 Issue。
