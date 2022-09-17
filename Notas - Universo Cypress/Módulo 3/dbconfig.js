//Insira essas linhas em /cypress/plugin/index.js:

/*const { Pool } = require('pg')
const pool = new Pool({
  host: 'kesavan.db.elephantsql.com',
  user: 'fdsamkbh',
  password: 'ZLTSWKAs2dt5gPO3nakvL9lrTBQoWKFV',
  database: 'fdsamkbh',
  port: 5432

}) Sessão de exports:

on('task', {
  removeUser(email){
    return new Promise(function(resolve){

      pool.query('DELETE FROM public.users WHERE email= $1', [email], function(error, result){

        if(error){
          throw error;
        }
        resolve({success: result})
    })
    

    })
  }
})

}*/
