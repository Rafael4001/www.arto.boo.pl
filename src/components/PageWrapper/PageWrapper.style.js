import { withStyles } from '@material-ui/core/styles';
import PageWrapper from './PageWrapper';
import { MAX_PAGE_WIDTH } from "../../constants";

const styles = (theme) => ({
  pageWrapperOuter: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    paddingTop: '6rem',

    [theme.breakpoints.down('sm')]: {
      paddingTop: '3rem',
    },
  },
  pageWrapperInner: {
    width: '100%',
    maxWidth: MAX_PAGE_WIDTH,
    margin: '0 auto',
  },
  menuHomepage: {
    position: 'fixed',
    top: '0rem',
    zIndex: 10000,
    width: '100%',
    maxWidth: MAX_PAGE_WIDTH,

    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#FFF',
    },
  },
});

export default withStyles(styles)(PageWrapper);
