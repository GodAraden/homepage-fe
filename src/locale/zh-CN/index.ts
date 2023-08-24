const modules = import.meta.glob<{ default: Record<string, string> }>(
  './*.ts',
  { eager: true }
)

const dictionary: Record<string, string> = {}

for (const output of Object.values(modules)) {
  for (const [key, value] of Object.entries(output.default)) {
    dictionary[key] = value
  }
}

export default dictionary
