import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import '../emotion.css';
import axios from 'axios';
import Alert from './Alert';

//Estilo para el formulario
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  //Declaracion del usuario
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  //Declaracion del error para Alert
  const [errorMe, setErrorMe] = useState('');

  //Permite cambiarle a suer los valores, obteniendolos del form
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  //Hace la peticion al server de obtener el usuario para el login
  const handelLogin = (e) => {
    e.preventDefault();
    setErrorMe('');
    axios.post("http://192.168.1.64:3001/api/login", { user: user.email, pass: user.password })
      .then((response) => {
        if (response.data.message === "No data") {
          const err = "Claves erróneas";
          setErrorMe(err);
        } else if (response.data.message === "Error") {
          const err = "Problema de Base de Datos";
          setErrorMe(err);
        } else {
          props.history.push('/main');
        }
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Inicio de sesión
        </Typography>
        <form className={classes.form} onSubmit={handelLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo email"
            name="email"
            autoComplete="email"
            defaultValue={user.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={user.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Ingresar
          </Button>
        </form>
      </div>
      {errorMe &&
        <Alert type="error" message={errorMe} autoclose={5000} />}
    </Container>
  );
}

export default withRouter(Login);