import React from "react";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import video from '../video/video2.mp4';
import { Ticker } from './Ticker';
import "./Header.css";

export const Header = () => {
    return(
        <>
            <CardMedia>
                <video playsInline autoPlay muted loop poster="src/video/video2.mp4" width="100%">
                    <source src={video} type="video/mp4"/>
                </video>
            </CardMedia>
                <Typography fontSize='4.5rem' component="div" className="Content" bottom='30rem' color='white' sx={{fontFamily: "'Poiret One', cursive", position: 'relative'}}>
                    HAPPY<br/>BIRTHDAY<br/>PARTY
                </Typography>  
            <div style={{marginTop: '-15rem'}}>
                <Ticker/>
            </div>  
        </> 
    )
};