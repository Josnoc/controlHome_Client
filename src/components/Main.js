import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import '../emotion.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '10%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
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
    main: {
        width: '90%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));
const MLink = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

const Main = () => {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.main}>
                <List className={classes.root} style={{background: 'inherit'}}>
                    <Link to="/medicionEntrada" component={MLink} variant="body2">
                        <button className="button">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon>meeting_room</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Puerta Principal" secondary="Distancia de un objeto a la puerta" />
                            </ListItem>
                        </button>
                    </Link>
                    <Link to="/medicionPasillo" component={MLink} variant="body2">
                        <button className="button">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon>border_vertical</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Pasillos" secondary="Cantidad de luz recibida" />
                            </ListItem>
                        </button>
                    </Link>
                    <Link to="/medicion" component={MLink} variant="body2">
                        <button className="button">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon>border_outer</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Habitación" secondary="Temperatura, Humedad y Cantidad de luz" />
                            </ListItem>
                        </button>
                    </Link>
                </List>
            </div>
        </Container>
    )
}

export default withRouter(Main);