import { curry } from 'ramda'
/**
 * branch
 *
 * this function accepts a predicate function
 * and returns the first component if true, and the second
 * if predicate is false
 *
 * branch :: (Function -> Bool) -> Element -> Element -> Elment
 *
 * @param {function|boolean} [predicatefn] function that returns a boolean or a boolean
 * @param {node}             [comp1]       element to render if predicate is true
 * @param {node}             [comp2]       element to render if predicate is false
 * @returns {node}                         returns the correct component according to predicate
 */
export const branch = curry((predicatefn, comp1, comp2) => (predicatefn ? comp1 : comp2)); // eslint-disable-line


/**
 * Function (Component) that returns null.
 * Example usage: branch(isEmpty(items), <RenderNothing />, <Item items={items} />)
 */
export const RenderNothing = () => null
