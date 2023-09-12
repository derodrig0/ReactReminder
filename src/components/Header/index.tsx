import { useState } from "react";

import { Container } from "./styles";

import { Logo } from "../Logo";
import { Button } from "../Button";
import { NewStickyModal } from "../NewStickyModal";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <Logo />
      <Button title="Adicionar Lembrete" onClick={handleOpenModal} />
      <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Container>
  );
}
