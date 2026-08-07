import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// GitHub Pages 같은 정적 호스팅에는 frame-ancestors 응답 헤더를 붙일 수 없고
// <meta> CSP 로는 그 지시어가 동작하지 않는다. 그래서 다른 사이트의 iframe
// 안에서는 앱을 아예 그리지 않는다(클릭재킹 방지).
if (window.self !== window.top) {
  document.body.textContent = '이 앱은 다른 사이트 안에서 열 수 없습니다.'
} else {
  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
