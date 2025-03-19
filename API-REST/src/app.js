import express from 'express'
import conexao from '../infra/conexao.js'
const app = express()

//indcar para o express para usar o body com json
app.use(express.json())

// //mock
// const listas=[
//     {id:1,nome:'José Paulo',grupo:'P'},
//     {id:2,nome:'Erick',grupo:'g'},
//     {id:3,nome:'Carlos',grupo:'P'},
//     {id:4,nome:'RaphaNide',grupo:'P'},
//     {id:5,nome:'Prefeito',grupo:'P'},
// ]

// //Criando uma rota padrão ou raiz
// app.get('/',(req,res)=>{
//     res.status(200).send('Aula de Prog Web Prof-Bruno')
// })

// function buscarAlunoporId(id) {
//     return listas.filter(listas => listas.id == id)
// }

//Outras rotas

//listar
app.get('/listas',(req,res)=>{
    const sql = "SELECT * FROM dbsenac.alunos;"
    conexao.query(sql, (error,result)=>{
      const row = result[0]
      if (error) {
        console.log(error)
        res.status(404).json({'error':error})
      } else {
        res.status(200).json(result);
      }
    }) 
})


//bucar por id
app.get('/listas/:id',(req,res)=>{
    //let index  = req.params.id
    //console.log(index)
    // res.json(buscarAlunoporId(req.params.id));
    const id = req.params.id
    const sql = "SELECT * FROM dbsenac.alunos WHERE id=?;"
    
    conexao.query(sql,id, (error,result)=>{
      if (error) {
        console.log(error)
        res.status(404).json({'error':error})
      } else {
        res.status(200).json(result);
      }
    }) 
})





//criar
app.post('/listas',(req,res)=>{
    const aluno = req.body
    const sql = "INSERT INTO `dbsenac`.`alunos` SET ?;"
    conexao.query(sql, aluno, (error,result)=>{
      if (error) {
        console.log(error)
        res.status(404).json({'error':error})
      } else {
        res.status(201).json(result);
      }
    })
})




//deletar errado 
app.delete('/listas/:id',(req,res)=>{
    //let index  = req.params.id
    //console.log(index)
    // res.json(buscarAlunoporId(req.params.id));
    const id = req.params.id
    const sql = "DELETE FROM dbsenac.alunos WHERE id=?;"
    
    conexao.query(sql,id, (error,result)=>{
      if (error) {
        console.log(error)
        res.status(404).json({'error':error})
      } else {
        res.status(200).json(result);
      }
    }) 
})


// Rota de exemplo teste: Retorna uma mensagem simples
app.get('/teste', (req, res) => {
    res.status(200).send('Não é vc que testa');
  });
  // Rota de exemplo 4: Retorna dados em formato JSON
  app.get('/listasAlunos', (req, res) => {
    const dados = [
        {
          nome: 'José',
          idade: 23,
          curso: 'Programação Web',
          status: 'Ativo',
        },
        {
          nome: 'Maria',
          idade: 30,
          curso: 'Design Gráfico',
          status: 'Inativo',
        },
        {
          nome: 'Carlos',
          idade: 27,
          curso: 'Engenharia de Software',
          status: 'Ativo',
        }
      ];
    res.status(200).json(dados);
  });
  
//Expor o objeto para outras rotas 
export default app



