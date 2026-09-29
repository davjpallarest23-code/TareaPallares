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

    const mostrarDatosUsuarios = async () =>{
      try{
        setCargando(true);
        const url = 'https://jsonplaceholder.typicode.com/users';        
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