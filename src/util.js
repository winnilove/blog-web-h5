export function getRedirectPath({ type, avatar }) {
  let url = type === "boss" ? "/boss" : "/condidate";
  if (!avatar) {
    url += "info";
  }
  return url;
}
export function getChatId(userId,TargetId){
  return [userId,TargetId].sort().join("_")
}