import mailLocker from "../../plugins/mail-locker/index.ts"
import manifest from "../../plugins/mail-locker/manifest.json"

export const plugins = [
  {
    id: "mail-locker",
    name: "Mail Locker",
    manifest,
    handler: mailLocker
  }
]

// 대화창이 시작될 때 플러그인 옆 메뉴로 자동 등록
export function getPluginMenu() {
  return plugins.map(p => ({
    id: p.id,
    label: p.manifest.name,
    allowedRead: p.manifest.permissions?.filesystem?.read,
    allowedWrite: p.manifest.permissions?.filesystem?.write
  }))
}
