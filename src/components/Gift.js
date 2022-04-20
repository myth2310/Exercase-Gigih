import './Gift.css';
// import React from 'react';
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import {CardActionArea } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';

const Gift = (props) => {
  // const [count, setCount] = useState(0);
    return (
      // <Container>
      //  <Grid >
      //   <Card sx={{ maxWidth: 345, mb: "30px", mt:"30px"}}>
      //     <CardActionArea>
      //     <CardMedia
      //         component="img"
      //         height="194"
      //         image={props.url}
      //       />
      //       <Typography sx={{ fontSize: 15 }} color="text.success" gutterBottom>
      //       {props.title}
      //       </Typography>
      //     </CardActionArea> 
      //   </Card>
      //   </Grid>
      // </Container>
      

          <div className='Card'>
            <img src={props.url} alt="gif"></img>
            <div className='container'>
              <p>{props.title}</p>
            </div>  
          </div>  
    );
  };
  
  export default Gift;
