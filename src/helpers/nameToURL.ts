export const nameToURL = (name: string): string => {
  return name.toLowerCase().replace(/ /g, '-')
}
