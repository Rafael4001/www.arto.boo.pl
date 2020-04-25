import { withStyles } from '@material-ui/core/styles';

import TermsNewVersion from './TermsNewVersion'


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  tabContainer: {
    paddingTop: '2rem',
  },
});

export default withStyles(styles)(TermsNewVersion);
