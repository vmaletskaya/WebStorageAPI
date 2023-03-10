import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

getSavedPlayDuration();

function onPlay(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

function getSavedPlayDuration() {
  const savedPlayTime = localStorage.getItem('videoplayer-current-time');
  if (savedPlayTime) {
    player.setCurrentTime(savedPlayTime);
  }
}
