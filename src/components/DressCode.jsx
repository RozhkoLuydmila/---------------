import React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const DressCode = () => {
    return(
        <Box>
            <CardContent sx={{backgroundColor: "#45616F", color: "#ffff"}}>
                <Typography gutterBottom variant="h4" component="div" sx={{fontFamily: "'Poiret One', cursive"}}>
                        О ДРЕСС-КОДЕ
                </Typography>
                <Typography variant="body1" sx={{fontFamily: "'Poiret One', cursive"}}>
                    Мы очень старались сделать торжество красивым и гармоничным.
                    Будем благодарны, если вы поддержите стиль и цветовую гамму нашей свадьбы в своих наряд.
                    (Соблюдение дресс-кода желательно, но не обязательно) 
                </Typography>
                <Box sx={{marginTop: "40px", fontFamily: "'Poiret One', cursive"}}>
                    <Typography variant="h7">
                        Цвета:
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1em',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 0.3,
                        width: 45,
                        height: 70,
                        },
                    }}>
                        <Paper variant="outlined" style={{backgroundColor: "#C4BEB5"}}/>
                        <Paper variant="outlined" style={{backgroundColor: "#70ABBF"}}/>
                        <Paper variant="outlined" style={{backgroundColor: "#327496"}}/>
                        <Paper variant="outlined" style={{backgroundColor: "#1C666D"}}/>
                        <Paper variant="outlined" style={{backgroundColor: "#495C69"}}/>
                        <Paper variant="outlined" style={{backgroundColor: "#907868"}}/>
                    </Box>
                </Box>
                <Typography variant="body1" sx={{marginTop: "40px", fontFamily: "'Poiret One', cursive"}}>
                    Девушки: коктейльные платья, такие, как будто вы собираетесь на самую крутую вечеринку ( но помните, что в белом платье невеста!)
                </Typography>
                <Typography variant="body1" sx={{fontFamily: "'Poiret One', cursive"}}>
                    Мужчины: костюм, рубашка, туфли, кеды
                </Typography>
            </CardContent>
        </Box>
    )
}