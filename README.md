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

## Action Creators
