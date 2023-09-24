import styled from "@emotion/styled";

export const Title = styled.p((props) => ({
  fontFamily: "David Libre",
  fontWeight: props.fontWeight ?? 700,
  fontSize: props.fontSize ?? "3.5rem",
  lineHeight: 1.1,
  textAlign: props.textAlign ?? "start",
}));

export const Text = styled.p((props) => ({
  fontFamily: "roboto",
  fontWeight: props.fontWeight ?? 400,
  fontSize: props.fontSize ?? 18,
  color: props.color ?? "#7b7b7b",
  maxWidth: props.maxWidth ?? "100%",
  textAlign: props.textAlign ?? "start",
}));
