import { Router } from "express"

const emocoesRoutes = Router()

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

app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)

})