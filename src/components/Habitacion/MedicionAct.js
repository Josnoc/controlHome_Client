import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import '../../emotion.css';
import axios from 'axios';
import sol from '../../images/Sol.png';
import cong from '../../images/conge.png';
import cal from '../../images/calur.png';

const Medicion = () => {
  //Definicion de los estados para la imagen del Card y de la consulta
  const [medicion, setmedicion] = useState([]);
  const [media, setMedia] = useState();

  //Carga de los datos a traves de axios y get
  useEffect(() => {
    axios.get("http://192.168.1.64:3001/api/lastReg").then((response) => {
      //Asignacion de los datos al estado medicion
      setmedicion(response.data);
      //Asignacion de la imagen segun la temperatura
      if (response) {
        response.data.forEach(el => {
          if (el.Temperatura > 27) {
            setMedia(cal);
          } else if (el.Temperatura < 15) {
            setMedia(cong);
          } else {
            setMedia(sol);
          }
        });
      }
    });
  }, []);

  const MLink = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
  ));

  return (
    <Container>
      <h1>Última medición tomada en la Habitación</h1>
      <div className="conte" align="right">
        <Link to="/main" component={MLink} variant="body2">
          <a className="button-back" href="#">Regresar</a>
        </Link>
      </div>
      <div className="container">
        <div className="row">
          {medicion.map((medida) => (
            <div key={medida.Id} className="card mb-3" style={{ border: '1px solid gray', borderRadius: '10px', width: "400px", maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2%' }}>
              <img src={media} className="card-img-top" alt={media} style={{ width: '80%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
              <div className="card-body" style={{ paddingLeft: '15px' }}>
                <p className="card-text text-monospace" style={{ fontSize: "2em", fontFamily: "Lucida Calligraphy" }}>Última medición</p>
                <p className="card-text text-monospace">Fecha: {medida.Fecha}</p>
                <p className="card-text text-monospace">Hora: {medida.Hora}</p>
                <p className="card-text text-monospace">Temperatura: {medida.Temperatura} °C</p>
                <p className="card-text text-monospace">Humedad: {medida.Humedad}</p>
                <p className="card-text text-monospace">Intensidad: {medida.Intensidad}</p>
                <Link to="/historial" component={MLink} className="card-link" style={{ fontFamily: "Lucida Calligraphy", color: 'white' }}>Ver historial</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default withRouter(Medicion);