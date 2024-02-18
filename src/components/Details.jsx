import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Timer } from './Timer';
import { Ticker } from './Ticker';

export const Details = () => {

    return (
        <>
            <Box mt={5}>
                <Typography gutterBottom variant="h4" component="div" style={{textAlign: "center", fontFamily: "'Poiret One', cursive", padding: "1rem"}}>
                    ДО ДНЯ РОЖДЕНИЯ 
                    ОСТАЛОСЬ
                </Typography>
                <div style={{fontFamily: "'Poiret One', cursive"}}>
                    <Timer/>
                </div>
            </Box>
                <Box style={{backgroundColor: "#b30304", borderRadius: "2em", marginTop: "3rem", textAlign: "center", padding: "1rem", margin: "2rem 1rem", color: "#ffffff"}}>
                    <Typography variant="h4" sx={{ fontFamily: "'Poiret One', cursive"}}>
                        Организационные моменты
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{fontFamily: "'Poiret One', cursive", marginTop: "1rem", color: "#ffffff"}}>
                        Хочу разделить этот праздник именно с вами! 
                        Ведь вы знаете, как я люблю день рождения! Поэтому давайте отпразднуем юбилей 
                        ЖЕСТКО ВЕСЕЛО!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{fontFamily: "'Poiret One', cursive", marginTop: "1rem", color: "#ffffff"}}>
                        *но ничего не разнесем, останемся живы и здоровы
                    </Typography>
                    <Box sx={{margin: "1rem"}}>
                        <a href="tel:+89155930824" style={{backgroundColor: "#070707", borderRadius: "1rem", padding: "10px", textDecoration: "none", color: "#ffffff", fontFamily: "'Poiret One', cursive"}}>
                            +8 (915) 593-08-24
                        </a>
                    </Box>
                </Box>
        </>
    )
}