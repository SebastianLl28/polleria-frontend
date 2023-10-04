/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/material";
import { Text, Title } from "../../../../styled/fonts";
import SpecialityCard from "./SpecialityCard";

const specialty = [
  {
    id: "1",
    name: "name example 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque cupiditate nihil quo accusantium quisquam.",
    price: 20,
    image: "/home/dish1.png",
  },
  {
    id: "2",
    name: "name example 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque cupiditate nihil quo accusantium quisquam.",
    price: 25,
    image: "/home/dish2.png",
  },
  {
    id: "3",
    name: "name example 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque cupiditate nihil quo accusantium quisquam.",
    price: 40,
    image: "/home/dish3.png",
  },
  {
    id: "4",
    name: "name example 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque cupiditate nihil quo accusantium quisquam.",
    price: 30,
    image: "/home/dish4.png",
  },
];

const SpecialtySection = () => {
  return (
    <Container sx={{ py: 7 }}>
      <Title textAlign="center">Nuestras Especialidades</Title>
      <Text
        textAlign="center"
        maxWidth="700px"
        css={css`
          margin-inline: auto;
        `}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        repudiandae facere quasi, corporis ipsam modi dicta non
      </Text>
      <ul
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 10rem 30px;
          padding-top: 10rem;
        `}
      >
        {specialty.map((specialty, index) => (
          <SpecialityCard
            key={specialty.id}
            specialty={specialty}
            index={index}
          />
        ))}
      </ul>
    </Container>
  );
};

export default SpecialtySection;
