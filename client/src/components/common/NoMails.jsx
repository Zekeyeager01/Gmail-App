import React from "react";
import { Box, Divider, Typography, styled } from "@mui/material";

const Component = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  opacity: "0.8",
  marginTop: 50,
});

const StyledDivider = styled(Divider)({
  width: "100%",
  marginTop: "10",
});

const NoMails = ({ message }) => {
  return (
    <Component>
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <StyledDivider />
    </Component>
  );
};

export default NoMails;
