import { storage } from '@extend-chrome/storage'

const getOwo = async () => {
  const contentCheck = await storage.sync.get('contentCheck')
  if ('contentCheck' in contentCheck && contentCheck?.contentCheck === false)
    return
  const elements = document.querySelectorAll('*')
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].nodeName === 'STYLE' || elements[i].nodeName === 'SCRIPT') {
      continue
    }
    elements[i]?.childNodes.forEach((child) => {
      if (child?.nodeType === 3) {
        child.textContent =
          child.textContent
            ?.replaceAll('l', 'w')
            .replaceAll('L', 'W')
            .replaceAll('r', 'w')
            .replaceAll('R', 'W') || child.textContent
      }
    })
  }
}
getOwo()
const getInputOwo = async () => {
  const inputCheck = await storage.sync.get('inputCheck')
  if ('inputCheck' in inputCheck) {
    if (inputCheck?.inputCheck === false) return
    const inputs = document.getElementsByTagName('input')
    const updateValue = (e: Event) => {
      const target = e.target as HTMLInputElement
      if (target.type === 'text') {
        target.value = target.value
          .replaceAll('l', 'w')
          .replaceAll('L', 'W')
          .replaceAll('r', 'w')
          .replaceAll('R', 'W')
      }
    }
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', updateValue)
    }
  } else {
    storage.sync.set({ inputCheck: true })
  }
}

document.addEventListener('DOMNodeInserted', getOwo)
document.addEventListener('DOMNodeInserted', getInputOwo)
