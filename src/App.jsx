import React from "react";
import { Header } from "./components/Header";
import { Date } from "./components/Date";
import { Program } from "./components/Program";
import { DressCode } from "./components/DressCode";
import { Details } from "./components/Details";
import { FormQuest } from "./components/FormQuest";
import Container from '@mui/material/Container';


export const App = () => {
  return (
    <>
      <Header/>
      <Date/>
      <Program/>
      <DressCode/>
      <Details/>
      <FormQuest/>
    </>
  );
}

export default App;
