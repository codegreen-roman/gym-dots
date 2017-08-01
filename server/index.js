import express from 'express'

const PORT = 3333
const app = express()

app.use(express.static('build'))
app.listen(PORT, () => console.log(`Running on localhost: ${PORT}`))
