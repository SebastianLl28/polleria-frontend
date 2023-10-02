/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { Text } from "../../../../styled/fonts";

const SpecialityCard = ({
  specialty: { name, description, price, image },
  index,
}) => {
  return (
    <li
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding: 5.2rem 0 2rem 0;
        border-radius: 4rem 0 4rem 0;
        background-color: #fff;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
          0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        gap: 1em;
      `}
    >
      <img
        src={image}
        alt=""
        css={css`
          max-width: 80%;
          margin: 0 auto;
          position: absolute;
          top: -8rem;
          left: 0;
          right: 0;
          filter: drop-shadow(0 0 1rem #00000047);
        `}
      />
      <Text color="#000" fontWeight={500} fontSize={22} textAlign="center">
        {name}
      </Text>
      <Text textAlign="center">{description}</Text>
      <Button variant="contained" color="primary" sx={{ alignSelf: "center" }}>
        Ver mas
      </Button>
    </li>
  );
};

export default SpecialityCard;
