import express from  'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello , Word"})

})

app.listen(serverPort, () => {
    console.log (`🙌 server satrted on http://localhost${serverPort}`)
})
