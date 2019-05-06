export default function remoteLoad (url) {
  return createScript(url)
  // 创建script标签 加入window命名空间中
  function createScript (url) {
    let scriptElement = document.createElement('script')
    document.body.appendChild(scriptElement)
    let promise = new Promise((resolve, reject) => {
      scriptElement.addEventListener('load', e => {
        removeScript(scriptElement)
        resolve(e)
      }, false)

      scriptElement.addEventListener('error', e => {
        removeScript(scriptElement)
        reject(e)
      }, false)
    })

    scriptElement.src = url

    return promise
  }

  // 移除script 避免内存溢出
  function removeScript (scriptElement) {
    document.body.removeChild(scriptElement)
  }
}
