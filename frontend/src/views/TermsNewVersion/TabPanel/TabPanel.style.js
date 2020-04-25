import { withStyles } from '@material-ui/core/styles';

import TabPanel from './TabPanel'


const styles = (theme) => ({
  tabContainer: {
    paddingTop: '2rem',
  },
});

export default withStyles(styles)(TabPanel);
