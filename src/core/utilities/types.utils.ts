export function setAddMany<T>(set: Set<T>, items: Iterable<T>, allowFalsy = false): Set<T> {
  for (const item of Array.from(items)) {
    if (allowFalsy || !!item) {
      set.add(item)
    }
  }
  return set
}

export function setToString<T>(set: Set<T>, separator = ' '): string {
  return Array.from(set).filter(Boolean).join(separator)
}
