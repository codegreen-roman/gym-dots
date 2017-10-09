import glamorous from 'glamorous'

export const arcTypes = {
    'toBeDone':'lightgrey',
    'completed':'lime',
    'failed':'tomato'
}

export const Path = glamorous.path(
    {
        fill: 'none',
        strokeWidth: '12px'
    },
    (props) => ({
        stroke: arcTypes[props.arcClass]
    })
)
