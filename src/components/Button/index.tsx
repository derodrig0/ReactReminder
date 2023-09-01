import { ContainerButton } from "./styles";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <ContainerButton onClick={onClick}>{title}</ContainerButton>
  );
}
