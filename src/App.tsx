// 맨 위에 추가
import { plugins } from "./plugins/loader"

function App() {
  // 앱 시작될 때 플러그인 등록 로그
  console.log("🔌 Loaded plugins:", plugins.map(p => p.id))
  
  return (
    <Chat /> // 기존 대화창
  )
}
