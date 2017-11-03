export const findByDataAttr = (wrapper, value) => {
    return wrapper.find(`[data-test='${value}']`)
}
