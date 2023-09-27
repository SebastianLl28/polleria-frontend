import { Container, Grid } from "@mui/material";
import Body from "./Body";
import Picture from "./Picture";

const HeroSection = () => {
  return (
    <Container sx={{ pb: 6 }}>
      <Grid container gap={7} width="100%">
        <Body />
        <Picture />
      </Grid>
    </Container>
  );
};

export default HeroSection;
