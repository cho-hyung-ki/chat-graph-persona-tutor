import { getPluginMenu } from "../plugins/loader"

export function Chat() {
  const pluginMenu = getPluginMenu()

  return (
    <div style={{ display: "flex" }}>
      {/* 기존 대화창 */}
      <div style={{ flex: 1 }}>
        {/* ... 네 기존 채팅 코드 ... */}
      </div>

      {/* 옆 메뉴 - 플러그인 서랍 버튼 */}
      <div style={{ width: "200px", borderLeft: "1px solid #ddd", padding: "10px" }}>
        <h4>🔌 Plugins</h4>
        {pluginMenu.map(p => (
          <div key={p.id} style={{ marginBottom: "10px", fontSize: "13px" }}>
            <button 
              onClick={() => console.log(`open ${p.id}`)}
              style={{ width: "100%", textAlign: "left" }}
            >
              📁 {p.label}
            </button>
            <div style={{ color: "#888", fontSize: "11px", marginTop: "4px" }}>
              Read: {p.allowedRead?.join(", ")}<br/>
              Write: {p.allowedWrite?.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
