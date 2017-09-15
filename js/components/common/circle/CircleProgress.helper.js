import R from 'ramda'

const FULL_TURN = 360
const HALF_TURN = 180
const QUARTER_TURN = 90

export const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    let angleInRadians = getAngleInRadians(angleInDegrees)

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    }
}

export const defineArc = (x, y, radius, startAngle, endAngle) => {

    let start = polarToCartesian(x, y, radius, endAngle)
    let end = polarToCartesian(x, y, radius, startAngle)

    return [
        'M', start.x, start.y,
        'A', radius, radius, 0, getLargeArcFlag(endAngle, startAngle), 0, end.x, end.y
    ].join(' ')

}

export const getLargeArcFlag = (endAngle, startAngle) => endAngle - startAngle <= HALF_TURN ? '0' : '1'

export const getAngleInRadians = (angleInDegrees) => (angleInDegrees - QUARTER_TURN) * Math.PI / HALF_TURN

export const getArcLength = (sets, space) => Math.ceil((FULL_TURN - (sets * space)) / sets)

export const generateArcClasses = (sets, results) => {
    const resultsMirror = R.range(0, sets)
    const wrapResults = R.map(i => R.nth(i, results))

    const getAllArcClasses = R.map(R.cond([
        [R.isNil, R.always('toBeDone')],
        [R.equals(true), R.always('completed')],
        [R.T, R.always('failed')]
    ]))

    return R.compose(getAllArcClasses, wrapResults)(resultsMirror)
}

export const generateArcPaths = (x, y, radius, space, sets) => {

    const initialValues = {
        startAngle: space,
        arcLength: getArcLength(sets, space),
        endAngle: space + getArcLength(sets, space),
        arcs: []
    }

    const reducer = ({ startAngle, endAngle, arcLength, arcs }) => ({
        arcLength,
        arcs: [...arcs, defineArc(x, y, radius, startAngle, endAngle)],
        startAngle: endAngle + space,
        endAngle: (endAngle + space) + arcLength
    })

    const getValues = R.reduce(reducer, initialValues)
    const app = R.compose(R.prop('arcs'), getValues, R.range(0))

    return app(sets)

}

// Some info here
// https://www.sarasoueidan.com/blog/building-a-circular-navigation-with-svg/

// Path consist of
// <path d="M mx,my A rx,ry x-axis-rotation large-arc-flag, sweep-flag x,y" />
// M mx,my – координаты начальной точки дуги
// A rx,ry – радиусы дуги
// x-axis-rotation – угол поворота всей дуги относительно оси абцисс. 0 - потому что круг, а не эллипс
// large-arc-flag – параметр, отвечающий за вывод большей части дуги. Маленькая дуга - 0. Большая дуга 1
// sweep-flag – отвечает за направление отрисовки дуги из начальной точки в конечную точку.
// x,y – координаты конечной точки дуги
