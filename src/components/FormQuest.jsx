import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import body4 from '../img/body4.jpeg';
import CardMedia from '@mui/material/CardMedia';
import icon from '../img/icons/balloons.png'



export const FormQuest = () => {
    return(
        <Box mt={5}>
            <CardMedia
                component="img"
                src={body4}
                alt="Link"
            />
            <Typography gutterBottom variant="h5" component="div" mt='1em' style={{textAlign: "center", fontFamily: "'Poiret One', cursive", padding: "1rem", color:"#b30304"}}>
                НАСТЮШКА-ПУШКА <br/>
                ждет ВСЕХ на своем празднике!
                <br/>
                <img src={icon} width={45} style={{ marginTop:'0.5rem'}}/>
            </Typography>
        </Box>
    )
}