import React, { useEffect, useState } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../emotion.css';
import axios from 'axios';

const MLink = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

//Estilos para la tabla y sus celdas
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxWidth: '100%',
  },
});

const Historial = () => {
  //Declaracion del estado historial
  const [historial, setHistorial] = useState([]);
  //Obtencion de los registros
  useEffect(() => {
    axios.get("http://192.168.1.64:3001/api/historial").then((response) => {
      setHistorial(response.data);
    });
  }, []);

  const classes = useStyles();
  return (
    <Container>
      <h1>Historial de mediciones de la Entrada</h1>
      <div className="conte" align="right">
        <Link to="/medicionEntrada" component={MLink} variant="body2">
          <a className="button-back" href="#">Regresar</a>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table, "bel"} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Fecha</StyledTableCell>
              <StyledTableCell align="center">Hora</StyledTableCell>
              <StyledTableCell align="center">Distancia</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historial.map((row) => (
              <StyledTableRow key={row.Id}>
                <StyledTableCell component="th" scope="row">
                  {row.Id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.Fecha}</StyledTableCell>
                <StyledTableCell align="center">{row.Hora}</StyledTableCell>
                <StyledTableCell align="center">{row.Distancia} cm</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default withRouter(Historial);