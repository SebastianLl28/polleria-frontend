import { Container, Grid } from "@mui/material";
import Body from "./Body";
import Picture from "./Picture";

const HeroSection = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container gap={7} width="100%">
        <Body />
        <Picture />
      </Grid>
    </Container>
  );
};

export default HeroSection;
