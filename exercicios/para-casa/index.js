const express = require("express")
const app = express()
const port = 3000
const produtosLista = require("./model/produtos.json")





app.use(express.json()) 

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    const idEscolhido = produtosLista.filter((item, index) => item.id == id)
        res.json(idEscolhido)
  })

app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome 
    const filtroValor = Number(req.query.valor)
    const produtoEscolhido = produtosLista.filter((item, index) => {
    if (filtroNome) {
        return item.nome.toLowerCase() === filtroNome.toLocaleLowerCase()
    }   
    if (filtroValor) {
        return item.valor === filtroValor
    }
    return item
    })
    res.json(produtoEscolhido)
  })

app.post("/produtos", (req, res) => {
    const body = req.body
    produtosLista.push(body)
    res.json(produtosLista)
})

app.get("/produtos", (req, res) => {
    res.json(produtosLista)
  })


app.listen(port, () => {
  console.log(`porta ====> ${port}`)
})