import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'


function Forms() {
  return (
    <>
      <Container fixed>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2}>
              <Button variant="outlined"> Boton 1 </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2}>
              <Button variant="contained" color="success">
                {" "}
                Boton 2{" "}
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2}>
              <Button variant="contained" color="error">
                {" "}
                Boton 3{" "}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container fixed>
        <Grid container mt={5} columnSpacing={5} rowSpacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2}>
              <Button variant="outlined"> Boton 1 </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2}>
              <Button variant="contained" color="success">
                {" "}
                Boton 2{" "}
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2}>
              <Button variant="contained" color="error">
                {" "}
                Boton 3{" "}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container fixed>
        <Grid container mb={3} mt={2} rowSpacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack textAlign={"center"}>
              <h1 style={{ color: "blue" }}>Formulario</h1>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Grid item xs={12} sm={6} md={4}>
              <Stack>
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid mt={2} item xs={12} sm={6} md={4}>
              <Stack>
                <TextField
                  id="outlined-basic"
                  label="Apellidos"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid mt={2} item xs={12} sm={6} md={4}>
              <Stack>
                <TextField
                  id="outlined-basic"
                  label="Dirección"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid mt={2} item xs={12} sm={6} md={4}>
              <Stack>
                <TextField
                  id="outlined-basic"
                  label="Usuario"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid mt={2} item xs={12} sm={6} md={4}>
              <Stack>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </Stack>
            </Grid>
            <Grid mt={2} item xs={12} sm={6} md={4}>
              <Stack>
                <TextField
                  id="outlined-number"
                  label="CI"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </Grid>
            <Grid mt={2} item xs={12} sm={6} md={4}>
              <Stack>
              <FormControl >
              <InputLabel id="demo-simple-select-autowidth-label">Estado</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  label="Estado"
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  <MenuItem value={10}>Activo</MenuItem>
                  <MenuItem value={21}>Inactivo</MenuItem>
                </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid mt={2} item xs={12} sm={6} md={4}>
              <Stack>
                <Button variant="contained" color="success">
                  Enviar
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Forms
