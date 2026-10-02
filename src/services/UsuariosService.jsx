// import React from 'react'

async function ObtenerUsuarios(name = "") {
  
        let url = '';
        if (name != ''){
          url = `https://jsonplaceholder.typicode.com/users?name=${name}`;        
        }
        else{
          url = 'https://jsonplaceholder.typicode.com/users';        
        }

        const resultado = await fetch(url);
        if (!resultado.ok){
          throw new Error("Problemas al mostrar los datos");
        }           
        const datosJson = await resultado.json();
        
        return datosJson;
}

export default ObtenerUsuarios;