import { StyleBreakpoints, StylePropsKeys, StylePropsValues } from "./styles"

export type Responsive<T> = T | Partial<Record<StyleBreakpoints, T>>

export type CoreProps = {
    margin
    padding
}


export function getClassName(key: keyof StylePropsKeys, value: StylePropsValues) {

}