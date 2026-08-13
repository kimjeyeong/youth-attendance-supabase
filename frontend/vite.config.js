import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { validateBuildEnvironment } from './build-environment.js'

// Cloudflare Pages 루트 배포는 '/'를 사용한다. 하위 경로 배포가 필요할 때만
// VITE_BASE_PATH를 명시한다.
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  if (command === 'build') validateBuildEnvironment(env)

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
  }
})
