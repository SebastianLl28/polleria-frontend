/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Grid } from "@mui/material";
import { Text, TextLink } from "../styled/fonts";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: #ff8800;
        color: #000;
        width: 100%;
      `}
    >
      <Container
        css={css`
          display: grid;
          padding: 3.5em 0;
          grid-template-columns: 1fr auto auto auto;
          gap: 4rem;
        `}
      >
        <Grid container rowGap={0.9}>
          <Text color="#000" fontWeight="700">
            LOGO
          </Text>
          <p>
            En tu casa o en la nuestra no importa donde estés, siempre vamos a
            engreirte con el gran sabor que nos caracteriza. ¡Gracias por
            preferirnos!
          </p>
          <p>© 2022 All rights reserved.</p>
        </Grid>
        <ul
          css={css`
            display: grid;
            grid-template-columns: repeat(3, min-content);
            grid-auto-rows: min-content;
            gap: 0.3em 2em;
          `}
        >
          <li
            css={css`
              grid-column: 1/-1;
            `}
          >
            <Text color="#000" fontWeight="700">
              Mapa del Sitio:
            </Text>
          </li>
          <li>
            <TextLink to="/">Home</TextLink>
          </li>
          <li>
            <TextLink to="/">Menu</TextLink>
          </li>
          <li>
            <TextLink to="/">Locales</TextLink>
          </li>
          <li>
            <TextLink to="/">Contactanos</TextLink>
          </li>
          <li>
            <TextLink to="/">Login</TextLink>
          </li>
          <li>
            <TextLink to="/">Registrate</TextLink>
          </li>
        </ul>
        <ul>
          <Text color="#000" fontWeight="700">
            Area legal:
          </Text>
          <li>
            <TextLink>Politicas de privacidad</TextLink>
          </li>
          <li>
            <TextLink>Terminos y condiciones</TextLink>
          </li>
          <li>
            <TextLink>Politicas de uso</TextLink>
          </li>
        </ul>
        <div>
          <div>
            <Text color="#000" fontWeight="700">
              Formas de Pago
            </Text>
            <ul
              css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 0.5em;
              `}
            >
              <li>
                <ImageLogo src="/home/visa-logo.png" alt="visa logo" />
              </li>
              <li>
                <ImageLogo src="/home/mastercard-logo.png" alt="" />
              </li>
              <li>
                <ImageLogo src="/home/maerican-express-logo.png" alt="" />
              </li>
            </ul>
          </div>
          <div
            css={css`
              margin-top: 1.2em;
            `}
          >
            <Text color="#000" fontWeight="700">
              Libros de Reclamaciones:
            </Text>
            <div
              css={css`
                width: 100%;
                display: flex;
                justify-content: center;
              `}
            >
              <Link to="/">
                <img src="/home/book.webp" alt="book" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

const ImageLogo = styled.img`
  width: 3.5rem;
  filter: drop-shadow(0 0 5px #00000027);
`;
