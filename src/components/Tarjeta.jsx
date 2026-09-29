import React from 'react'
// import './Tarjeta.css'
import iguana from '../assets/iguana.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Tarjeta({nombreUsuario="Nombre", correo="nombre@correo.com"}) {
  return (
    /* <div className='tarjeta'>
        <img src="" alt="Aquí va una imagen" />        
        <h2>Titulo:{titulo}</h2>
        <p>Contexto:{parrafo}</p>
    </div>  */
    <>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={iguana}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombreUsuario}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {correo}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, cupiditate?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más...</Button>        
      </CardActions>
    </Card>    
    </>
  )
}

export default Tarjeta