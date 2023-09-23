// import { styled } from "styled-components";
import React from "react";
import styled from "@emotion/styled";
import { Button, Container, Grid, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Grid container>
        <Grid item container xs={6} alignContent="center" gap={2.5}>
          <Typography
            fontFamily="David Libre"
            fontWeight={700}
            fontSize="3.5rem"
            lineHeight={1.1}
          >
            Atrévete a probar los mejores pollos que existen
          </Typography>
          <Typography
            fontSize={18}
            color="#555555"
            fontWeight={500}
            maxWidth={460}
          >
            Nuestra dedicación a la calidad premium y a las recetas artesanales
            garantiza una experiencia gastronómica única que nunca olvidarás.
            Cada bocado de nuestros pollos se destaca por su sabor inigualable y
            jugosidad inigualable
          </Typography>
          <Grid gap={2} container>
            <Button variant="contained" color="primary">
              Menu
            </Button>
            <Button variant="contained" color="primary">
              Reservar una mesa
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={6}
          alignContent="center"
          justifyContent="center"
          position="relative"
          height="auto"
        >
          <Image
            src="/home/hero.webp"
            alt=""
            width="516"
            height="712"
            borderRadius="3.8rem"
          />
          <Image
            src="/home/hero-secondary.png"
            alt=""
            width="236"
            height="240"
            position="absolute"
            bottom="1rem"
            left="-5rem"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;

const Image = styled("img")((props) => ({
  borderRadius: props.borderRadius ?? "unset",
  position: props.position ?? "block",
  bottom: props.bottom ?? "unset",
  left: props.left ?? "unset",
}));
