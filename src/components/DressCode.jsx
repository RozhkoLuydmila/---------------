import React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../img/color1.jpg';
import img2 from '../img/color2.jpg';
import img3 from '../img/color3.jpg';
import img4 from '../img/color4.jpg';
import img5 from '../img/color5.jpg';
import img6 from '../img/color6.jpg';
import img10 from '../img/color10.jpg';
import img8 from '../img/color8.jpg';
import img11 from '../img/color11.jpg';

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
      img: img1,
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
      img: img10,
      rows: 2,
      cols: 1,
    },
    {
      img: img8,
      rows: 2,
    },
    {
      img: img2,
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
                        width: "14%",
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
                <Box>
                    <Typography variant="body1" sx={{marginTop: "40px", fontFamily: "'Poiret One', cursive"}}>
                        Чтобы вам было удобнее ориентироваться, мы собрали немного референсов:
                    </Typography>
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
                <Typography variant="body1" sx={{marginTop: "30px", fontFamily: "'Poiret One', cursive"}}>
                    Девушки: коктейльные платья, такие, как будто вы собираетесь на самую крутую вечеринку ( но помните, что в белом платье невеста!)
                </Typography>
                <Typography variant="body1" sx={{fontFamily: "'Poiret One', cursive"}}>
                    Мужчины: костюм, рубашка, туфли, кеды
                </Typography>
            </CardContent>
        </Box>
    )
}