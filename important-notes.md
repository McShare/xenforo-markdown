# Important Notes

There is no native support for Markdown in XenForo and there is no plugin written with API provided by XenForo, thus making the idea of `xenforo-markdown` possible. It is an *alternative* approach to make it possible for your users to *use* Markdown, **but absolutely not in an elegant way.**

That is, though `xenforo-markdown` provides the feature of rendering markdown text *correctly* (most of the time), the technique behind it may be really a mess. You could feel this through the speed of rendering, stability, bugs, etc.

Thus, it is obviously really necessary to give you some important notes, in order to back you up for the **consequences**.

`xenforo-markdown` will **not** cause data loss, as everything is processed in the front-end.

- **You may be using it forever.** It is a must for the users to surround their content in Markdown with `[MD]` note. What if you decide not to use the plugin anymore? All the content will show in their original way. This could be really ugly and scary when someone new drops by your forum and see people communicating in a strange way *if most of your users focus on Markdown*.
- **Do not use `[MD]` if you are not going to actually write Markdown.** This is due to the render method. You should only use `[MD][/MD]` to surround your content (must not be empty) as other usages could lead to a mess in your post. If you really need this to make something e.g. examples, you should always mention it by escaping the bracket, like this: `\[MD\]` or  `\[/MD\]`.
- **Many parts of the program is dedicated to [MineBBS](https://minebbs.com).** Sadly this is not planned to be fixed soon. And this makes it quite necessary for you to modify some of the parts to make it work on your site. The parts are:
  - Pages on which rendering is enabled - only render when location includes `thread/`, `resource/`, etc.
  - Styles - based on what theme MineBBS is using.
  - Target element class - based on what theme MineBBS is using. E.g. `.bbWrapper` stands for user content container.
  - More in `xf-markdown.ts`.
- **To be continued.**

If all of above are OK for you, `xenforo-markdown` is here to use!