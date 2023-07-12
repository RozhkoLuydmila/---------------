import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import body1 from '../img/body1.png';
import body6 from '../img/body6.png';

export const Date = () => {
    return (
        <Box mt={5}>
          <Grid container rowSpacing={0} sx={{ textAlign: "center", fontFamily: "'Poiret One', cursive"}}>
            <Grid item xs={6}>
              <CardMedia
                    component="img"
                    src={body1}
                    alt="Link"
                />
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: "#DDD3C7"}}>
                <CardContent sx={{marginTop: "20%"}}>
                    <Typography variant="h7">
                        КОГДА?
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{marginTop: "2em", fontFamily: "'Poiret One', cursive"}}>
                        2 СЕНТЯБРЯ 2023
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={6} sx={{backgroundColor: "#816A58", color: "#ffff"}}>
                <CardContent sx={{marginTop: "20%"}}>
                    <Typography variant="h7">
                        ГДЕ?
                    </Typography>
                    <Typography variant="h6" component="div" sx={{marginTop: "2em", fontFamily: "'Poiret One', cursive"}}>
                        РЕСТОРАН "ПАРУСА"
                    </Typography>
                    <Typography variant="body2" component="div" sx={{marginTop: "5%", fontFamily: "'Poiret One', cursive"}}>
                        Рязанская область, Поляны, ул. Жемчужная 3
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={6}>
                <CardMedia
                    component="img"
                    src={body6}
                    alt="Link"
                />
            </Grid>
          </Grid>
        </Box>
    );
}