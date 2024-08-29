import express from  'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const emocoes =[
    {
        id : 1,
        nome: "Nojinho",
        cor : "Verde"
    },
    {
        id : 2,
        nome: "Raivoso",
        cor : "Vermelho"
    },
    {
        id : 3,
        nome: "Felicidade",
        cor : "Amarelo"
    }
]

const personagens =[
    {
        id:100,
        nome:"Totoro",
        vivo: true
    },
    {
        id:101,
        nome:"Bart",
        vivo: true
    },
    {
        id:102,
        nome:" Brian O'Conner ",
        vivo: false
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello , Word"})

})
app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello , Word"})

})

app.get("/emocoes", (req, res) => {
    return res.status(200).send(emocoes)

})
app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)

})

app.listen(serverPort, () => {
    console.log (`🙌 server satrted on http://localhost${serverPort}`)
})


