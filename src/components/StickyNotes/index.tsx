import { Container, Grid } from "./styles";

export function StickyNotes() {
  return (
    <Container>
      <div className="reminder-Title">
        <h1>Lembretes - </h1>
      </div>
      <Grid>
        <div>
          <h2>Título</h2>
          <p>Descrição</p>
        </div>
      </Grid>
    </Container>
  );
}
