// Mail Locker - 대화창에서 메일 오면 그 자리에서 사물함으로

export const config = {
  name: "mail-locker",
  // manifest.json에서 읽어온 권한을 여기서 실제로 씀
  allowedRead: ["/mails/inbox"],
  allowedWrite: ["/locker/GE", "/locker/Family"]
}

export async function onMailReceived(mail, mcp) {
  // 1. PDD 변환 (S/A/B/C 자동 분류)
  const pdd = await mcp.ai.convertToPDD(mail)
  
  // 2. 대화창에 수용/거부 카드 띄우기
  return {
    type: "card",
    message: `${mail.subject} - ${pdd.level}급, /locker/${pdd.folder}에 저장할까요?`,
    actions: ["수용", "거부", "위치 변경"],
    onAccept: () => mcp.filesystem.createFile(`/locker/${pdd.folder}/${mail.subject}.md`, pdd.content)
  }
}
