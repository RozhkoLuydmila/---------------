import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./Ticker.css";

export const Ticker = () => {
    return(
        <div className="ticker">
            <Card className="ticker__wrapper">
                <Typography sx={{fontSize: '5rem'}} className="ticker__item">PARTY</Typography>
                <Typography sx={{fontSize: '5rem'}} className="ticker__item">PARTY</Typography>
                <Typography sx={{fontSize: '5rem'}} className="ticker__item">PARTY</Typography>
                <Typography sx={{fontSize: '5rem'}} className="ticker__item">PARTY</Typography>
                <Typography sx={{fontSize: '5rem'}} className="ticker__item">PARTY</Typography>
                <Typography sx={{fontSize: '5rem'}} className="ticker__item">PARTY</Typography>
                <Typography sx={{fontSize: '5rem'}} className="ticker__item">PARTY</Typography>
                <Typography sx={{fontSize: '5rem'}} className="ticker__item">PARTY</Typography>
            </Card>
        </div>
    );
};
