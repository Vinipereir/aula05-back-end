import { Router } from "express"

const emocoesRoutes = Router()

let emocoes =[
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


emocoesRoutes.get("/", (req, res) => {
    return res.status(200).send(emocoes)
})

emocoesRoutes.post("/", (req, res) => {
    const { nome , cor } = req.body
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }

emocoesRoutes.push(novaEmocao)
return res.status(201).send(emocoes)


  
})

export default emocoesRoutes;
