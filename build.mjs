import * as esbuild from 'esbuild';

await esbuild.build({
	entryPoints: ['xf-markdown.ts'],
	bundle: true,
	minify: true,
	platform: 'browser',
	target: 'es2015',
	outfile: './dist/xf-markdown.min.js'
});
