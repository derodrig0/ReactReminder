import { useState } from "react";

import { Container } from "./styles";

import { Logo } from "../Logo";
import { Button } from "../Button";

export function Header() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  return (
    <Container>
      <Logo />
      <p>{number}</p>
      <Button title="Adicionar Lembrete" onClick={increment} />
    </Container>
  );
}
