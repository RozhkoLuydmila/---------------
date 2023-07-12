import React from "react";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import koordinat from '../img/koordinat.jpg'

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
                    <Typography variant="body1" color="text.secondary" sx={{fontFamily: "'Poiret One', cursive", marginTop: "1rem"}}>
                        Для вашего удобства мы организовали трансфер, который доставит вас до места проведения торжества, а также отвезет обратно.
                        Если вы будете на личном автомобиле, просим сообщить в личном сообщении.
                        О дополнительной информации вам сообщит наш координатор Юлия.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{fontFamily: "'Poiret One', cursive", margin: "1rem 0"}}>
                        В день свадьбы мы будем немного заняты, поэтому, в случае возникновения вопросов,
                        вы всегда можете обратиться за помощью к нашему свадебному координатору: 
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Avatar
                            alt="Julia"
                            src={koordinat}
                            sx={{ width: 200, height: 200 }}
                        />
                    </Box>
                    <Box sx={{margin: "1rem"}}>
                        <a href="tel:+79537479680" style={{backgroundColor: "#45616F", borderRadius: "2em", padding: "10px", textDecoration: "none", color: "#ffffff", fontFamily: "'Poiret One', cursive"}}>
                            Юлия: +7 (953) 747-96-80
                        </a>
                    </Box>
                </Box>
        </Box>
    )
}