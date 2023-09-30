import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Title = styled.p((props) => ({
  fontFamily: "David Libre",
  fontWeight: props.fontWeight ?? 700,
  fontSize: props.fontSize ?? "3.5rem",
  lineHeight: 1.1,
  textAlign: props.textAlign ?? "start",
}));

export const Text = styled.p((props) => ({
  fontFamily: "roboto",
  fontWeight: props.fontWeight ?? 500,
  fontSize: props.fontSize ?? 18,
  color: props.color ?? "#7b7b7b",
  maxWidth: props.maxWidth ?? "100%",
  textAlign: props.textAlign ?? "start",
}));

export const TextLink = styled(Link)((props) => ({
  fontFamily: "roboto",
  fontWeight: props.fontWeight ?? 400,
  color: props.color ?? "#000000",
  textDecoration: "none",
  letterSpacing: "1px",
  fontStyle: "italic",
}));
