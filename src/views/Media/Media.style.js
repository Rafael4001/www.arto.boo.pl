import { withStyles } from '@material-ui/core/styles';

import Media from './Media'


const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactTextContainer: {
    fontSize: '2.3125rem',
    fontFamily: 'Parisienne',
  },
  repertoireContainer: {

    display: 'flex',
    alignItems: 'center',

    '& a': {
      textDecoration: 'none',
      color: `#000`,
    },

    padding: '0 0 1rem 0'
  },
  repertoireContainerText: {
    fontSize: '1rem',
    fontFamily: '\'Baskervville\',serif',
    padding: '1rem',

    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },


  },
  imageContainer: {
    width: '3rem',
  }
});

export default withStyles(styles)(Media);
