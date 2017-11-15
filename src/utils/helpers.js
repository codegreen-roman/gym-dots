import R from 'ramda'
/**
 * branch
 *
 * this function accepts a predicate function
 * and returns the first component if true, and the second
 * if predicate is false
 *
 * branch :: (Function -> Bool) -> Element -> Element -> Elment
 */
export const branch = R.curry((predicatefn, comp1, comp2) => (predicatefn ? comp1 : comp2)) // eslint-disable-line

/**
 * Function (Component) that returns null.
 * Example usage: branch(isEmpty(items),
 * <RenderNothing />, <Item items={items} />)
 */
export const RenderNothing = () => null

/**
 * Opposite of isEmpty
 */
export const notEmpty = R.compose(R.not, R.isEmpty)

/**
 * Opposite of isNil
 */
export const isNotNil = R.compose(R.not, R.isNil)

/**
 * Adding indexes to map
*/
export const mapIndexed = R.addIndex(R.map)

/**
 * Exctracting event.target.value
 */
export const extractTargetValue = R.compose(R.prop('value'), R.prop('target'))

/**
 * Detect whether status is loggedIn / loggedOut
 */
export const isLoggedIn = status => R.equals(status, 'loggedIn')
export const isLoggedOut = status => R.equals(status, 'loggedOut')
