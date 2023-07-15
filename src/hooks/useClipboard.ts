import { ref } from 'vue'

export default function useClipBoard() {
  const { readText, writeText } = navigator.clipboard
  const copied = ref(false)
  const write = (text: string) => {
    writeText(text).then(() => {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 3000)
    })
  }
  const read = async () => {
    const text = await readText()
    return text
  }
  return { read, write, copied }
}
