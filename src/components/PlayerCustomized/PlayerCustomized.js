import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import PlayPause from '../../mp3Player/withMediaProps'
import TrackContainer from "../TrackContainer";
import { MUSIC, SONGS_IMAGES } from "../../constants";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AlbumIcon from '@material-ui/icons/Album';

import Image from "../Image";
import { Typography } from "@material-ui/core";
import { TRACK_LIST } from "../../trackList";
import HomepageMainPhoto from "../HomepageMainPhoto/HomepageMainPhoto";


const {
  CurrentTime,
  // Progress,
  SeekBar,
  Duration,
  Volume,
  // Fullscreen,
  MuteUnmute,
  // autoplay,
  // isPlaying
} = controls;


class Panner {
  constructor({source, audioContext, panningAmount = 0}) {
    this._source = source;
    this._audioContext = audioContext;
    this._initialPanningAmount = panningAmount;
  }

  connect() {
    this._splitter = this._audioContext.createChannelSplitter(2);
    this._gainLeft = this._audioContext.createGain();
    this._gainRight = this._audioContext.createGain();
    this._merger = this._audioContext.createChannelMerger(2);
    this._source.connect(
      this._splitter,
      0,
      0
    );
    this._splitter.connect(
      this._gainLeft,
      0
    );
    this._splitter.connect(
      this._gainRight,
      1
    );
    this._gainLeft.connect(
      this._merger,
      0,
      0
    );
    this._gainRight.connect(
      this._merger,
      0,
      1
    );
    return this._merger
  }

  setPosition(amount) {
    this._gainLeft.gain.value = amount <= 0 ? 1 : 1 - amount;
    this._gainRight.gain.value = amount >= 0 ? 1 : 1 + amount;
  }
}

const tracks = TRACK_LIST;

class PlayerCustomized extends Component {
  state = {
    actualPlayingTrackMp3Name: tracks[0].mp3Name,
    autoplay: false,
    isPlaying: false,
    actualSongImage: '',
    actualSongName: '',
  };

  componentDidMount() {
    this.setState({
      actualSongImage: tracks[0].imgSrc
    })
  }


  _connectSource = (source, audioContext) => {
    this.panner = new Panner({source, audioContext});
    return this.panner.connect()
  };


  trackList = () => (
    tracks.map(track => {
      return (
        <TrackContainer
          key={track.name}
          track={track}
          actualPlayingTrackMp3Name={this.state.actualPlayingTrackMp3Name}
          onClickPlay={() => {
            return (
              this.setState({
                actualPlayingTrackMp3Name: track.mp3Name,
                actualSongName: track.name,
                autoplay: true,
                isPlaying: true,
                actualSongImage: track.imgSrc ? track.imgSrc : SONGS_IMAGES.DefaultSongImage,
              })
            )
          }}
        />
      )
    })
  );

  showWhatSongIsPlaying = (song) => {
    return song.mp3Name === this.state.actualPlayingTrackMp3Name
  };


  playNextSong = () => {
    const actualSongIndex = tracks.findIndex(this.showWhatSongIsPlaying);
    const newSongIndex = actualSongIndex + 1;
    const nextSong = tracks[newSongIndex];

    this.setState({
      actualPlayingTrackMp3Name: nextSong.mp3Name,
      actualSongName: nextSong.name,
      autoplay: true,
      isPlaying: true,
      actualSongImage: nextSong.imgSrc ? nextSong.imgSrc : SONGS_IMAGES.DefaultSongImage,
    })
  };


  render() {
    const {classes} = this.props;

    return (
      <Media ref={c => (this.media = c)}>
        <div className={classes.positionAbsoluteWrapper}>
          <div className={classes.mainContainer}>
            <div className={classes.albumImageContainer}>
              <Typography
                className={classes.currentSong}>{this.state.actualSongName ? this.state.actualSongName : 'Wybierz utwor'}</Typography>
              <PlayPause/>
              <div className={classes.seekBarContainer}>
                <div className={classes.playerTime}><CurrentTime/>/<Duration/></div>
                <div className={classes.seekBar}><SeekBar style={{width: '100%'}}/></div>
              </div>
              <div className={classes.actualSongPlayer}>
                <Player
                  ref={c => (this._player = c)}
                  src={`/mp3/${this.state.actualPlayingTrackMp3Name}.mp3`}
                  connectSource={this._connectSource}
                  useAudioObject
                  autoPlay={this.state.autoplay}
                  isPlaying={this.state.isPlaying}
                  onEnded={this.playNextSong}
                />
              </div>
            </div>

            <div className={classes.trackListContainer}>
              {this.trackList()}
            </div>
          </div>
        </div>
      </Media>

    )
  }
}

PlayerCustomized.displayName = 'PlayerCustomized';

export default PlayerCustomized
