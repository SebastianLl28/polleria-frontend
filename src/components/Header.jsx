/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Container, IconButton } from "@mui/material";
import { TextLink, Title } from "../styled/fonts";
import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <header
      css={css`
        background-color: #ff8800;
        color: #000;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.229);
        position: sticky;
        top: 0;
        z-index: 10;
      `}
    >
      <Container
        sx={css`
          padding-block: 1em;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        `}
      >
        <div
          css={css`
            flex-grow: 1;
            flex-basis: 0;
          `}
        >
          <Title fontSize={40}>Logo</Title>
        </div>
        <nav>
          <ContainerList>
            <li>
              <TextLink to="/">Home</TextLink>
            </li>
            <li>
              <TextLink to="/menu">Menu</TextLink>
            </li>
            <li>
              <TextLink to="/local">Locales</TextLink>
            </li>
            <li>
              <TextLink to="/contact">Contactanos</TextLink>
            </li>
          </ContainerList>
        </nav>
        <ContainerList
          css={css`
            display: flex;
            flex-grow: 1;
            flex-basis: 0;
            justify-content: end;
            align-items: center;
          `}
        >
          <li>
            <Button
              variant="contained"
              startIcon={<PersonIcon sx={{ marginBottom: "2.5px" }} />}
            >
              Ingresar
            </Button>
          </li>
          <li>
            <IconButton>
              <img
                src="/home/shopping-cart-icon.svg"
                alt="shopping cart icon"
                css={css`
                  width: 32px;
                  height: 32px;
                `}
              />
            </IconButton>
          </li>
        </ContainerList>
      </Container>
    </header>
  );
};

export default Header;

const ContainerList = styled.ul`
  display: flex;
  gap: 1.5em;
`;
