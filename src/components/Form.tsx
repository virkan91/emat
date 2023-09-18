import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="İsim Soyisim" variant="outlined" />
      <TextField id="outlined-basic" label="Firma Adı" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="E-Posta Adresi"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Telefon Numarası"
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Mesajınız"
        multiline
        rows={4}
      />
    </Box>
  );
}
