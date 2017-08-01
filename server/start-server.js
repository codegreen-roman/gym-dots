import express from 'express'
import cors from 'cors'
import compression from 'compression'

export async function start(port) {
    // Create global app object
    const app = express()

    app.use(cors())
    app.use(compression())
    app.use(express.static('build'))

    return new Promise(resolve => {
        const server = app.listen(process.env.PORT || port, () => {
            server.on('close', () => {
                // do some cleanup
            })
            resolve(server)
        })
    })
}
