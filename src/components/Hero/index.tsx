import { Container } from "./styles";

//import heroImage from '../../assets/images/Hero.png'
import heroImage from '../../assets/images/post-it.jpg'

export function Hero() {
  return (
      <Container>
        <img src={heroImage} alt="Hero React Reminder" />
      </Container>
  );
}