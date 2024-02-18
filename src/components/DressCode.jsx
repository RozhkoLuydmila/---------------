import React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import img2 from '../img/samka2.jpeg';
import img3 from '../img/samka3.jpeg';
import img4 from '../img/samka4.jpeg';
import img5 from '../img/samka5.jpeg';
import img6 from '../img/samka6.jpeg';
import img11 from '../img/samka9.jpeg';
import body5 from '../img/body5.jpeg';
import body6 from '../img/body6.jpeg';
import { Ticker } from "./Ticker";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
    {
      img: img2,
      rows: 2,
      cols: 2,
    },
    {
      img: img5,
    },
    {
      img: img3,
    },
    {
      img: img4,
      rows: 2,
      cols: 2,
    },
    {
      img: img6,
    },
    {
      img: img11,
    },
  ];

export const DressCode = () => {
    return(
        <Box>
            <CardContent sx={{backgroundColor: "#070707", color: "#ffff"}}>
                <Typography gutterBottom variant="h4" component="div" fontWeight={600} sx={{fontFamily: "'Poiret One', cursive", color:"#b30304"}}>
                  ДРЕСС-КОД/
                  INSTASAMCA-PARTY
                </Typography>
                <Typography variant="body1" sx={{fontFamily: "'Poiret One', cursive"}}>
                    НО, зная вашу любовь к разным музыкальным исполнителям, пойму,
                    если вы приедете в стиле:
                    Короля и Шута,
                    Федука,
                    Мияги,
                    ATL,
                    Макана,
                    Михаила Круга
                    Буду рада, если вы будете соответствовать тематике праздника!
                </Typography>
                <Box>
                    <ImageList
                        variant="quilted"
                        cols={4}
                        rowHeight={121}
                        >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                      </ImageList>
                </Box>
            </CardContent>
            <div style={{marginTop: '3rem'}}>
                <Ticker />
            </div>
            <Grid container rowSpacing={0} mt='3rem' sx={{ textAlign: "center", fontFamily: "'Poiret One', cursive"}}>
              <Grid item xs={6}>
                <CardMedia
                    component="img"
                    src={body5}
                    alt="Link"
                  />
              </Grid>
            <Grid item xs={6} sx={{ backgroundColor: "#b30304", color: "#ffff"}}>
                <CardMedia
                    component="img"
                    src={body6}
                    alt="Link"
                  />
            </Grid>
          </Grid>
        </Box>
    )
}