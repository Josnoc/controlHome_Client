import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';
import Med from './components/Habitacion/MedicionAct';
import Historial from './components/Habitacion/Historial';
import MedP from './components/Pasillos/MedicionPas';
import MedE from './components/Entrada/MedicionEntr';
import HistorialP from './components/Pasillos/HistorialPas';
import HistorialE from './components/Entrada/HistorialEntr';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/medicion" component={Med} />
        <Route exact path="/medicionPasillo" component={MedP} />
        <Route exact path="/medicionEntrada" component={MedE} />
        <Route exact path="/historial" component={Historial} />
        <Route exact path="/historialPas" component={HistorialP} />
        <Route exact path="/historialEntr" component={HistorialE} />
    </Switch>
);

export default Routes;