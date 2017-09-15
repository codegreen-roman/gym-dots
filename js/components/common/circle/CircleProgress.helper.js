import R from 'ramda'

const FULL_TURN = 360
const HALF_TURN = 180
const QUARTER_TURN = 90

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    let angleInRadians = getAngleInRadians(angleInDegrees)

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    }
}

const defineArc = (x, y, radius, startAngle, endAngle) => {

    let start = polarToCartesian(x, y, radius, endAngle)
    let end = polarToCartesian(x, y, radius, startAngle)

    return [
        'M', start.x, start.y,
        'A', radius, radius, 0, getLargeArcFlag(endAngle, startAngle), 0, end.x, end.y
    ].join(' ')

}

const getLargeArcFlag = (endAngle, startAngle) => endAngle - startAngle <= HALF_TURN ? '0' : '1'

const getAngleInRadians = (angleInDegrees) => (angleInDegrees - QUARTER_TURN) * Math.PI / HALF_TURN

const getArcLength = (sets, space) => (FULL_TURN - (sets * space)) / sets

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

export const generateArcPaths = (x, y, r, space, sets) => {
    let startAngle = space
    let arcLength = getArcLength(sets, space)
    let endAngle = space + arcLength
    let arcs = []
    let d

    for (var i = 0; i < sets; i++) {
        d = defineArc(x, y, r, startAngle, endAngle)
        arcs.push(d)
        startAngle = endAngle + space
        endAngle = startAngle + arcLength
    }
    return arcs
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
