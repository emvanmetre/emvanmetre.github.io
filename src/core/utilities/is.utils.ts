export function isIterableSet<T>(iterable?: Iterable<T> | null): iterable is Set<T> {
  return iterable instanceof Set
}

export function isNonNullish<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

export function isFunction<T>(func: T | null | undefined): func is T {
  return typeof func === 'function'
}
