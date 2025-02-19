import express from 'express'
const app = express()

const port = 3000

//Escutando a porta 3000
app.listen(port,() =>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
export default app

