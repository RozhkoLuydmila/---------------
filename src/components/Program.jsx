import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';


export const Program = () => {
    return(
            <Box sx={{padding: "30px 15px", fontFamily: "'Poiret One', cursive"}}>
                <Typography gutterBottom variant="h4" component="div" mb={0} sx={{fontFamily: "'Poiret One', cursive"}}>
                    ВРЕМЯ ВСТРЕЧИ
                </Typography>
                <Divider color="black" />
                <List >
                    <Typography variant="h5" color="#801313" mt={2} sx={{fontFamily: "'Poiret One', cursive"}}>
                        16:00 - Сбор гостей
                    </Typography>
                    <Typography variant="h5" color="#801313"  mt={2} sx={{fontFamily: "'Poiret One', cursive"}}>
                        17:00 - Начало праздника
                    </Typography>
                </List>
            </Box>
    )
}