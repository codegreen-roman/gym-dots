### To add new snippet:

- go to `snippetsMaker` folder
- paste your snippet into `input.js` (Check if it's valid)
- run `make.sh` command in terminal
- copy output from the output.txt to `snippets.json` (body field)
- Then `Preferences > User Snippets > Javascript snippets` and paste contents of `snippets.json`

```
"Snippet_name": {
    "prefix": "Snippet_prefix",
    "body": "Snippet_body",
    "description": "Snippet_description"
}
```

Other methods to generate snippets are also welcomed ;)
I believe it's possible to generate an output to .json with correct structure

Also fill in the `snippets.md` file with new snippets you are adding into `snippets.json`

### Connected functional component

```
import React from 'react'
import {  } from 'prop-types'
import { connect } from 'react-redux'

const _componentName = () => {
    return (
        <div>

        </div>
    )
}

_componentName.propTypes = {

}

const mapStateToProps = state => ({

})

const mapActionsToProps = dispatch => ({

})

export default connect(mapStateToProps , mapActionsToProps)(_componentName)
```

### Connected class component


```
import React, { Component } from 'react'
import {} from 'prop-types'
import { connect } from 'react-redux'

class _componentName extends Component {
    static propTypes = {}
    
    render() {
        return (
            <div>
    
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapActionsToProps = dispatch => ({

})

export default connect(mapStateToProps , mapActionsToProps)(_componentName)

```

### It/Describe/BeforeEach

```

it('', () => {

})

describe('', () => {
    
})

beforeEach(() => {

})

```


### Test suite with one spec and beforeEach

```
describe('', () => {
    beforeEach(() => {

    })

    it('', () => {

    })
})
```
