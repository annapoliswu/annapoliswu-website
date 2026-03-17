// eslint-disable import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import autoprefixer from 'autoprefixer';


// https://vitejs.dev/config/
export default defineConfig({
    base: '/annapoliswu-website/',
    plugins: [
        eslint(),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
            ],
        },
    },
});