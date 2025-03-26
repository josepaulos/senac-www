import express from 'express'
import conexao from './app/database/conexao.js'
import AlunoController from './app/controllers/AlunoController.js'

const app = express()

//indcar para o express para usar o body com json
app.use(express.json())


//ROTAS

//listar
app.get('/listas',AlunoController.index)

//bucar por id
app.get('/listas/:id',AlunoController.show)

//criar
app.post('/listas',AlunoController.store)

//deletar
app.delete('/listas/:id',AlunoController.delete)

//update por id
app.put('/update/:id',AlunoController.update);

  
//Expor o objeto para outras rotas 
export default app



