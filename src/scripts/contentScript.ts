const getOwo = () => {
  const elements = document.querySelectorAll('*')
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].nodeName === 'STYLE' || elements[i].nodeName === 'SCRIPT') {
      continue
    }
    // const child = elements?.[i]?.childNodes?.[0]
    // if (child?.nodeType === 3) {
    //   child.textContent =
    //     child.textContent
    //       ?.replaceAll('l', 'w')
    //       .replaceAll('L', 'W')
    //       .replaceAll('r', 'w')
    //       .replaceAll('R', 'W') || child.textContent
    // }
  }
}
getOwo()
document.addEventListener('DOMNodeInserted', getOwo)
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
