import { Router } from "express"

const personagensRoutes = Router()

let personagens = [   
    {   
        id:100,
        nome: "Pai do Rocha",
        studio: "Céu azul",
        vivo: false,
    },

    {   
        id:101,
        nome: "Shrek",
        studio: "Dreamworks",
        vivo: true
        
    },

    {   
        id:102,
        nome: "Tom Mater",
        studio: "Pixar",
        vivo: true

    }
]

personagensRoutes.get("/",(req, res) => {
    return res.status(200)
    .send(personagens)
})

//Rota para criar um novo personagem
personagensRoutes.post("/", (req, res) => {
    const {nome, studio, vivo} = req.body
    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        studio: studio,
        vivo: vivo
    }
    personagens.push(novoPersonagem)
    return res.status(201).send(novoPersonagem )
});



personagensRoutes.delete("/:id" , (req,res) => {
    const {id} = req.params;

    const personagem = personagens.find((person) => person.id == id)

    if (!personagem) {
        return res.status(404).send({
            message: "Personagem não encontardo!",
        });
    }
    personagens = personagens.filter((person)=>person.id = id) 

    return res.status(200).send({
        message: "personagem deletado",
        personagem,
    });
});


export default personagensRoutes;