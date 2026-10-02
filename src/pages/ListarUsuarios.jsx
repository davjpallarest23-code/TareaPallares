import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Tarjeta from '../components/Tarjeta';
import '../components/gridTarjetas.css';
import Spinner from '../components/Spinner';
import ObtenerUsuarios from '../services/UsuariosService';



function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando]=useState(false);
    const [error, setError] = useState(null);
    const [buscar, setBuscar] = useState("");

    const mostrarDatosUsuarios = async (name = "") =>{
      try{
        setCargando(true);
        const datosJson = await ObtenerUsuarios(name);        
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
    return <Spinner></Spinner>
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