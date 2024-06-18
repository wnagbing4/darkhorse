import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
	const env = loadEnv(mode, process.cwd(), '')
return {
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router']
		}),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false // css in js
				})
			]
			//dts:["src/components"]
		})
	],
	server: {
		proxy: {
			[env.VITE_APP_BASE_API]: {
				target: env.VITE_APP_BASE_URL,
				changeOrigin: true,
				rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
}
})
