import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 로 배포할 때는 base 를 '/저장소이름/' 으로 바꾸세요.
// Vercel/Netlify 로 배포하면 base 는 '/' 그대로 두면 됩니다.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
