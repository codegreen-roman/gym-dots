import ReactDOMServer from 'react-dom/server'
import React from 'react'

import { Main } from '../js-dist/components/main/Main'
import { StaticRouter as Router } from 'react-router'
import { Provider } from 'react-redux'
import { configureStore } from '../js-dist/state/store'

const context = {}
const store = configureStore()

export const generateMarkUp = (req) => {

    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <Router location={req.url} context={context}>
                <Main />
            </Router>
        </Provider>
    )

    return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="apple-mobile-web-app-capable" content="yes">
            <meta name="apple-touch-fullscreen" content="yes">
            <meta name="mobile-web-app-capable" content="yes">
            <meta name="viewport" content="width=device-width,initial-scale=1,
                minimum-scale=1, maximum-scale=1,user-scalable=no,shrink-to-fit=no">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
            <title>Gym Dots</title>
        </head>
        
        <body>
            <div id="app">${content}</div>
        </body>
        
        </html>`

}
