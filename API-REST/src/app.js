import app from "../server.js"

//Criando uma rota padrão ou raiz
app.get('/',(req,res)=>{
    res.status(200).send('Aula de Prog Web Prof-Bruno')
})



