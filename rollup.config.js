import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import { mdsvex } from 'mdsvex';
import json from '@rollup/plugin-json';
import { parse as yaml } from 'yaml';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
    json(),
		svelte({
			preprocess: [
        mdsvex({
          extensions: ['.svelte'],
          frontmatter: {
            marker: '-',
            type: 'yaml',
            parse(frontmatter, messages) {
              // parse frontmatter as YAML, but throw out the prettier-ignore at the beginning
              // frontmatter is a YAML string where the first line is a prettier-ignore comment
              // this is to prevent prettier from messing up the frontmatter.
              // the comment looks like this: <!-- prettier-ignore -->
              try {
                console.log(frontmatter);
                return yaml(frontmatter.replace(/<!--\s*prettier-ignore\s*-->/, ''));
              } catch (e) {
                // handle YAMLParseError. TODO: make this better
                messages.push(`YAML parse error: ${e.message}`);
              }
            }
          }
        }),
        sveltePreprocess({ sourceMap: !production }),
      ],
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
