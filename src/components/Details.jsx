import React from "react";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Timer } from './Timer';


export const Details = () => {

    return (
        <Box>
            <Box mt={5}>
            <Typography gutterBottom variant="h4" component="div" style={{textAlign: "center", fontFamily: "'Poiret One', cursive", padding: "1rem"}}>
                 ДО СВАДЬБЫ ОСТАЛОСЬ
            </Typography>
                <Timer/>
            </Box>
                <Box style={{border: "1px solid black", borderRadius: "2em", marginTop: "3rem", textAlign: "center", padding: "1rem", margin: "2rem 1rem"}}>
                    <Typography variant="h4" sx={{ fontFamily: "'Poiret One', cursive"}}>
                        Организационные моменты
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{fontFamily: "'Poiret One', cursive", marginTop: "1rem"}}>
                        Приятным комплиментом для нас вместо цветов будет бутылка вашего любимого алкогольного напитка, 
                        которую мы откроем на ближайшем совместном празднике 
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{fontFamily: "'Poiret One', cursive", marginTop: "1rem"}}>
                        Просим подтвердить свое присутствие в личном сообщении на это пригласительное письмо до 17.07.2023 
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mt={2} sx={{fontFamily: "'Poiret One', cursive"}}>
                        В день свадьбы мы будем немного заняты, поэтому, в случае возникновения вопросов,
                        вы всегда можете обратиться за помощью к нашему свадебному координатору: 
                    </Typography>
                    <Button variant="contained" size="small" href="tel:+79307802053" sx={{display: "flex", justifyContent: "center", borderRadius: "2em", backgroundColor: "#45616F", margin: "1em 4em", fontFamily: "'Poiret One', cursive"}}>
                        Юлия: +7 (953) 747-96-80
                    </Button>
                </Box>
        </Box>
    )
}