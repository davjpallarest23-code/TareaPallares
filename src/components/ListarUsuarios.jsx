import React, { useEffect, useState } from 'react'
import './Spinner.css'
import Button from '@mui/material/Button';
import Tarjeta from './Tarjeta';
import { Grid } from '@mui/material';
import './gridTarjetas.css';


function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando]=useState(false);
    const [error, setError] = useState(null);
    const [buscar, setBuscar] = useState("");

    const mostrarDatosUsuarios = async (name = "") =>{
      try{
        setCargando(true);
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
        setUsuarios(datosJson);        
      }
      catch (err){
        setError(err.message);
      }
      finally{
        setCargando(false);
      }
    }

    useEffect(()=>{
      mostrarDatosUsuarios();
    },[]);
    
  if(cargando){
    return <span className="loader"></span>
  }  

  if(error){
    return <p>Error:{error}</p>
  }

  
    
  return (
    <>
      <h2>ListarUsuarios</h2> 
      <input 
        type="text" 
        value={buscar}       
        onChange={(e)=>setBuscar(e.target.value)}
      />        
      <p>{buscar}</p>
      <button onClick={()=>mostrarDatosUsuarios(buscar)}>Buscar</button>
      <div className='gridTrajetas'>        
          {
            usuarios.map((u)=>{
              return (                 
                <Tarjeta key={u.id} nombreUsuario={u.username} correo={u.email}></Tarjeta>
              )
            })
          }                 
      </div>
      {/* <button onClick={mostrarDatosUsuarios}>Refrescar</button> */}
      <Button variant="contained" onClick={mostrarDatosUsuarios}>Refrescar</Button>
    </>
  )
}

export default ListarUsuarios