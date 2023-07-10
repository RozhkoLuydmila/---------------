import React from "react";
// import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import FormGroup from '@mui/material/FormGroup';
// import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import body7 from '../img/body7.jpg';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { outlinedInputClasses } from '@mui/material/OutlinedInput';
// import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';



export const FormQuest = () => {
  //   const [sum, setSum] = React.useState('');

  // const handleChange = (event) => {
  //   setSum(event.target.value);
  // };

  // const customTheme = (outerTheme) =>
  // createTheme({
  //   palette: {
  //     mode: outerTheme.palette.mode,
  //   },
  //   components: {
  //     MuiOutlinedInput: {
  //       styleOverrides: {
  //         notchedOutline: {
  //           borderColor: 'var(--TextField-brandBorderColor)',
  //         },
  //       //   root: {
  //       //     [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
  //       //       borderColor: 'var(--TextField-brandBorderHoverColor)',
  //       //     },
  //       //     [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
  //       //       borderColor: 'var(--TextField-brandBorderFocusedColor)',
  //       //     },
  //       //   },
  //       },
  //     },
  //   },
  // });

  //   const outerTheme = useTheme();

    return(
        <Box mt={5}>
            <CardMedia
                component="img"
                src={body7}
                alt="Link"
            />
            {/* <Card style={{padding: "20px", fontFamily: "'Poiret One', cursive", backgroundColor: "#45616F", color:"#ffff"}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "'Poiret One', cursive"}}>
                    Пожалуйста, подтвердите свое присутствие
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth sx={{ fontFamily: "'Poiret One', cursive", color:"#ffff"}}>
                        <InputLabel id="demo-simple-select-label" sx={{fontFamily: "'Poiret One', cursive", color:"#ffff"}}>Количество</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sum}
                        label="Количество"
                        onChange={handleChange}
                        sx={{fontFamily: "'Poiret One', cursive", color:"#ffff"}}
                        >
                        <MenuItem value={1}>Один</MenuItem>
                        <MenuItem value={2}>Двое</MenuItem>
                        <MenuItem value={3}>Трое</MenuItem>
                        <MenuItem value={4}>Четверо</MenuItem>
                        <MenuItem value={5}>Пятеро</MenuItem>
                        </Select>
                    </FormControl>
                    <ThemeProvider theme={customTheme(outerTheme)} sx={{fontFamily: "'Poiret One', cursive", color:"#ffff"}}>
                    {/* <TextField id="outlined-basic" label="Фамилия и Имя" variant="outlined" sx={{ marginTop: 3}}/> */}
                    {/* <TextField label="Фамилия и Имя" color="secondary"/>
                    </ThemeProvider>
                </Box>
                <FormControl style={{marginTop:"20px", color:"#ffff"}}>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: "'Poiret One', cursive", color:"#ffff"}}>Присутствие?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="default"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Я приду/ мы придем" />
                        <FormControlLabel value="male" control={<Radio />} label="Прийти не получится :(" />
                    </RadioGroup>
                </FormControl>
                <Button variant="contained" size="small" href="#contained-buttons" sx={{display: "flex", justifyContent: "center", borderRadius: "2em", backgroundColor: "#ffff", color: "black", margin: "1em auto"}}>
                    Отправить
                </Button>
            </Card> */}
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center", marginTop: "20px", fontFamily: "'Poiret One', cursive", padding: "1rem"}}>
                Ждем вас на торжестве, ваши Станислав и Людмила
                <br/>
                <FavoriteBorderIcon fontSize="medium" sx={{marginTop:"0.5rem"}}/>
            </Typography>
        </Box>
    )
}