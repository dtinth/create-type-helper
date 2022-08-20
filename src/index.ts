/**
 * Creates a type helper that takes an object of type T and returns it.
 * @public
 */
export function createTypeHelper<T>() {
  return (value: T) => value
}

/**
 * Creates a type helper that infers the type of the value constraining it to the given type.
 * @public
 */
export function createSubtypeHelper<T>() {
  return <X extends T>(value: X) => value
}
