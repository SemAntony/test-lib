import {defineConfig} from 'vite'
import {resolve} from 'path'
import {dependencies, devDependencies} from './package.json'


// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'MyLib',
            // the proper extensions will be added
            fileName: 'index',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react/jsx-runtime", ...Object.keys(dependencies), ...Object.keys(devDependencies)],
            output: {
                // // Provide global variables to use in the UMD build
                // // for externalized deps
                // globals: {
                //     vue: 'Vue',
                // },
            },
        },
        target: 'esnext',
        sourcemap: true,
    },
    // plugins: [react()],
})
