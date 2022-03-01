import React, { useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';

import creations from "./images/tatoo.png";

//migration
import {useStyles} from './styles'; // to-do: move stuff inside
import { ThemeProvider,createTheme} from '@material-ui/core/styles';
//import {makeStyles} from '@mui/styles';


const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
      <ThemeProvider theme={createTheme()}>
        <Container maxWidth="lg">
          <AppBar className={useStyles().appBar} position="static" color="inherit">
            <Typography className={useStyles().heading} variant="h2" align="center">Creations</Typography>
            <img className={useStyles().image} src={creations} alt="icon" height="60" />
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </ThemeProvider>
    );
  };
  
  export default App;