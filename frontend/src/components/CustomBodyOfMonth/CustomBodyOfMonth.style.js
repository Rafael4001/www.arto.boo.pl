import { withStyles } from '@material-ui/core/styles';

import CustomBodyOfMonth from './CustomBodyOfMonth';


const styles = (theme) => ({
  main: {
    fontSize: '1.2rem',
    padding: '0.35rem',
    border: 'solid #ddd 0.001rem',
  },

  number: {
    color: '#aeaeae',
    paddingRight: '0.5rem',
    fontSize: '1.5rem',
  },
  day: {
  },
  busy: {
    backgroundColor: 'rgba(77,184,74,0.43)',
  },
  emptyContainer: {},
  holiday: {
    backgroundColor: '#5bc0de',
    color: 'white',
  },
  infoEmpty: {
    backgroundColor: '#ff747e',
  },
  reservation: {
    backgroundColor: '#6aada6',
  },
  info: {
    fontSize: '0.9rem',
    borderRadius: '0.5rem',
    padding: '0.1rem 0.4rem',
    textAlign: 'right',

    [theme.breakpoints.up('sm')]: {
      marginRight: '1rem',
    },
  },

  infoBusy: {
    backgroundColor: '#55c7bd',
  },

  infoHoliday: {
    backgroundColor: 'white',
    color: 'black'
  },

  infoReservation: {
    backgroundColor: '#8ba598',
    color: 'black'
  },

  details: {
    fontSize: '0.7rem',
    margin: '0.2rem',
  },

  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  detailsMainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowInfo: {
    fontSize: '0.7rem',
  },
  icon: {
    fontSize: '1.2rem',
    marginRight: '0.2rem'
  },
  termIconContainer: {
    display: 'grid',
    gridTemplateColumns: '1.5rem 5.3125rem 5.5rem',
    alignItems: 'center'
  }
});

export default withStyles(styles)(CustomBodyOfMonth);
