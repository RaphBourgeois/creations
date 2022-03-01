import {makeStyles} from '@mui/styles';
import { createTheme} from '@material-ui/core/styles';

const theme = createTheme();

export const useStyles = makeStyles((createTheme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));