import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 追加
  server: {
    origin: 'http://127.0.0.1:5173'
  }
})
