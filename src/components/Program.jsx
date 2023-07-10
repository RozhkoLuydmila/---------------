import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';


export const Program = () => {
    return(
            <Box sx={{padding: "30px 15px", fontFamily: "'Poiret One', cursive"}}>
                <Typography gutterBottom variant="h4" component="div" mb={0} sx={{fontFamily: "'Poiret One', cursive"}}>
                    ПРОГРАММА ДНЯ
                </Typography>
                <Divider color="black" />
                <List >
                    <Typography variant="h5" color="text.secondary" mt={2} sx={{fontFamily: "'Poiret One', cursive"}}>
                        15:00 - Встреча гостей
                    </Typography>
                    <Typography variant="h5" color="text.secondary" mt={2} sx={{fontFamily: "'Poiret One', cursive"}}>
                        16:00 - Торжественная регистрация
                    </Typography>
                    <Typography variant="h5" color="text.secondary" mt={2} sx={{fontFamily: "'Poiret One', cursive"}}>
                        17:00 - Свадебный ужин
                    </Typography>
                    <Typography variant="h5" color="text.secondary" mt={2} sx={{fontFamily: "'Poiret One', cursive"}}>
                        23:00 - Завершение вечера
                    </Typography>
                </List>
            </Box>
    )
}