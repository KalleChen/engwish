import { storage } from '@extend-chrome/storage'

const inputCheckbox = document.getElementById('input-check') as HTMLInputElement
const contentCheckbox = document.getElementById(
  'content-check'
) as HTMLInputElement

const setUp = async () => {
  const inputCheck = await storage.sync.get('inputCheck')
  if (!inputCheckbox || !contentCheckbox) return
  const contentCheck = await storage.sync.get('contentCheck')
  if (
    'inputCheck' in inputCheck &&
    typeof inputCheck.inputCheck === 'boolean'
  ) {
    inputCheckbox.checked = inputCheck.inputCheck
  } else {
    inputCheckbox.checked = true
    storage.sync.set({ inputCheck: true })
  }

  if (
    'contentCheck' in contentCheck &&
    typeof contentCheck.contentCheck === 'boolean'
  ) {
    contentCheckbox.checked = contentCheck.contentCheck
  } else {
    contentCheckbox.checked = true
    storage.sync.set({ contentCheck: true })
  }

  if (inputCheckbox) {
    inputCheckbox.addEventListener('change', () => {
      if (inputCheckbox?.checked === undefined) {
        storage.sync.set({ inputCheck: true })
      } else {
        storage.sync.set({ inputCheck: inputCheckbox?.checked })
      }
    })
  }
  if (contentCheckbox) {
    contentCheckbox.addEventListener('change', () => {
      if (contentCheckbox?.checked === undefined) {
        storage.sync.set({ contentCheck: true })
      } else {
        storage.sync.set({ contentCheck: contentCheckbox?.checked })
      }
    })
  }
}
setUp()
