import conexao from "../database/conexao.js";

class AlunoReporitory{
    //criar um novo elemento
    create(){}

    //buscar tudo
    findAll(){
        const sql = "SELECT * FROM dbsenac.alunos;"
    conexao.query(sql, (error,result)=>{
      if (error) {
        //console.log(error)
        return error
      } else {
        console.log(result)
        return result
      }


    })

    }

    //buscar por id
    findById(){}

    //atualizar
    update(){}

    //delete
    delete(){}

}

export default AlunoReporitory()
