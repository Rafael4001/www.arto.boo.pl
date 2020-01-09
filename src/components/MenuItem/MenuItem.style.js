import { withStyles } from '@material-ui/core/styles';

import MenuItem from './MenuItem'
import { COLORS } from "../../constants";


const styles = (theme) => ({
  mainContainer: {
    height: '3rem',
    border: 'none',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    margin: '0.2rem 0.2rem',
    borderBottom: `solid 1px ${COLORS.grey.light}`,
    outline: 'none',

    '&:hover': {
      transition: '0.7s',
      color: COLORS.red.main,
      borderBottom: `solid 1px ${COLORS.red.main}`,
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },

  },
  text: {
    fontSize: '1.3rem',
    fontWeight: 300,
    fontFamily: '\'Baskervville\',serif',

    '&:focus': {
      outline: 'none',
    },
  }
});

export default withStyles(styles)(MenuItem);
