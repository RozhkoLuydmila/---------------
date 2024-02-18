import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import body1 from '../img/body1.jpeg';
import body3 from '../img/body3.jpeg';

export const Date = () => {
    return (
        <Box mt='6em'>
          <Grid container rowSpacing={0} sx={{ textAlign: "center", fontFamily: "'Poiret One', cursive"}}>
            <Grid item xs={6}>
              <CardMedia
                    component="img"
                    src={body3}
                    alt="Link"
                />
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: "#b30304", color: "#ffff"}}>
                <CardContent sx={{marginTop: "20%"}}>
                    <Typography variant="h7">
                        КОГДА?
                    </Typography>
                    <Typography variant="h6" sx={{marginTop: "3em", fontFamily: "'Poiret One', cursive"}}>
                        16 МАРТА 2024
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={6} sx={{backgroundColor: "#070707", color: "#ffff"}}>
                <CardContent sx={{marginTop: "20%"}}>
                    <Typography variant="h7">
                        ГДЕ?
                    </Typography>
                    <Typography variant="h6" component="div" sx={{marginTop: "2em", fontFamily: "'Poiret One', cursive"}}>
                        PARTY HOUS
                    </Typography>
                    <Typography variant="body2" component="div" sx={{marginTop: "5%", fontFamily: "'Poiret One', cursive"}}>
                        Рязанская область, село Алеканово, ул. Степная 43
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={6}>
                <CardMedia
                    component="img"
                    src={body1}
                    alt="Link"
                />
            </Grid>
          </Grid>
        </Box>
    );
}