import { withStyles } from '@material-ui/core/styles';
import PlayerCustomized from './PlayerCustomized'
import { COLORS } from "../../colors";


const styles = (theme) => ({
  positionAbsoluteWrapper: {
    height: '90%',
    // position: 'relative',

  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    position: 'relative',
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      marginTop: '2rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '1rem',
    }

  },
  currentSong: {
    fontFamily: '\'Baskervville\',serif',
    padding: '0.5rem',
  },
  main: {
    backgroundColor: '#f5f5f5',
    width: '80%',

    trackListStyle: {
      listStyleType: 'none',
    },

    trackListItem: {
      textDecoration: 'none',
      margin: '2rem',
    },
  },
  volumeContainer: {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  volume: {
    width: 50,
  },
  volumeText: {
    marginRight: '1rem',
  },
  actualSongPlayer: {
    display: 'grid',
    gridTemplateColumns: '5rem 6rem 1fr 1fr',
    alignItems: 'center',
  },
  playerToolsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.2rem'
  },
  playerTime: {
    display: 'flex',
    flexDirection: 'row',
  },
  songImageContainer: {
    height: '10rem',
    width: '15rem',

    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      maxWidth: '30rem',
      height: 'auto',
      maxHeight: '30rem',
    }
  },
  trackListContainer: {
    position: 'absolute',
    width: '105%',
    top: '8rem',
    height: '25rem',
    overflowY: 'scroll',


    [theme.breakpoints.up('sm')]: {
      overflowY: 'auto',
      height: '80vh',
    },
  },
  actualImage: {
    height: '10rem',

    [theme.breakpoints.up('sm')]: {
      height: '20rem'
    },
  },
  albumImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',

    position: 'absolute',
    top: 0,

    width: '100%',
    backgroundColor: `${COLORS.white.main}`,

    [theme.breakpoints.up('sm')]: {
      border: `solid 1px ${COLORS.grey.dark}`,
    },

  },
  seekBarContainer: {
    width: '100%',
    maxWidth: '30rem',
    display: 'grid',
    gridTemplateColumns: '4rem auto',
    gridGap: '1rem',
  },
  seekBar: {
    width: '100%'
  }
});

export default withStyles(styles)(PlayerCustomized);
