import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const STOREGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(STOREGE_KEY, seconds);
  }, 1000)
);
const seconds = localStorage.getItem(STOREGE_KEY) || 0;

player.setCurrentTime(seconds);
