import * as esbuild from 'esbuild';
import fs from 'node:fs';

await esbuild.build({
	entryPoints: ['xf-markdown.ts'],
	bundle: true,
	watch: {
		onRebuild(error) {
			if (error) return;
			fs.copyFileSync('./dist/xf-markdown.min.js', './www.minebbs.com/js/xf-markdown.min.js');
		}
	},
	platform: 'browser',
	target: 'es2015',
	outfile: './dist/xf-markdown.min.js'
});
