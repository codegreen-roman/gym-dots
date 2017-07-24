# General

### Running the app

Use command `npm run dev:server` to start webpack and json-server

mockapi is running on `http://localhost:3000`

### About flow

install flow and flow-typed globally

`yarn global add flow-bin`

`yarn global add flow-typed` 

`yarn` to install deps

`flow-typed install` to update flow typed deps versions

`yarn flow` for running flow

VSCODE specific, add to seettings, to avoid error
`"javascript.validate.enable": false`

### Action Structure
our actions should contain props type and payload

```
{
    type: '',
    payload: {
        
    }
}
```
## Presentational components

## Container components
### Helper method names for connected components

- mapStateToProps
- mapActionsToProps

# Testing

## Component

- How my component should look like with a given set of props?
- Can I determine all possible collections of props. So if a day label should render a day of the week 

```['M', 'T', 'W', 'T', 'F', 'S', 'S']```

The easiest way is to use the toMatchSnapshot() method for every input from this list

```$javascript

['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach(dayOfTheWeek => {
    const props = { 
        dayOfTheWeek
    }
        
    expect(shallow(<MyComponent {...props} />)).toMatchSnapshot()
})

```
This will create a number of snapshots

## Action Creators

Simple creator is just returning an object which should have payload and type props, easy to test. 

Async creators are at the end generating a list of actions (expectedActions) to be dispatched by the store, 
this behaviour should be tested. 

## Reducers

