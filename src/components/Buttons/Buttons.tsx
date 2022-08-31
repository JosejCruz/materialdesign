import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function Buttons() {
  const [Count, setCount] = useState(0);
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        {Count}
      </Button>
      <Button
        onClick={() => setCount(Count + 1)}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Enviar
      </Button>
    </Stack>
  );
}
