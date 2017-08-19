/* eslint no-unused-vars: "off"*/

import { equals, compose, prop, pick, cond, T, always, concat, flip, dec } from 'ramda'

export const fillMissingFields = (obj) => {
    return {
        ...obj,
        sets: obj.setsLeft,
        results: [],
    }
}
