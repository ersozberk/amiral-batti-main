import React, { FC, useContext } from "react";
import { ctx } from "../../../pages";
import Container from "./StartScreen.styled";
import Button from "../Button";

const StartScreen: FC = () => {
  const {
    dispatch,
    actions: { startGame },
  } = useContext(ctx);

  return (
    <Container>
      <h1 className="title">Amiral Battı</h1>
      <h2>Bilgisayarı yenebilir misin?</h2>
      <Button onClick={() => dispatch(startGame())}>Başla</Button>
    </Container>
  );
};

export default StartScreen;
