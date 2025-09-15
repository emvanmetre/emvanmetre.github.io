import { isIterableSet } from './is.utils'

export function iterToSet<T>(iterable?: Iterable<T> | null): Set<T> {
  return isIterableSet(iterable) ? iterable : new Set(iterable)
}

export function mergeIterables<T>(...iterables: Array<Iterable<T> | null | undefined>): Set<T> {
  const items: T[] = []
  iterables.forEach(iterable => {
    if (iterable) {
      items.push(...Array.from(iterable))
    }
  })
  return new Set(items)
}
