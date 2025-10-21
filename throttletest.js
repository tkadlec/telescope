import {
  start as throttleStart,
  stop as throttleStop,
} from '@sitespeed.io/throttle';

throttleStart({ up: 360, down: 780, rtt: 200 });
