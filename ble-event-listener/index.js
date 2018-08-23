/*
* This script listen to a custom event raised by the BBC micro:bit over BLE
* and control Spotify on macOS with Node.js and AppleScript.
*
* References: 
* - https://github.com/sandeepmistry/node-bbc-microbit
* - https://www.npmjs.com/package/spotify-node-applescript
*
* Created by José Juan Sánchez, @josejuansanchez. August 20, 2018.
* Released under GNU GPL v3.
*/

let BBCMicrobit = require('bbc-microbit');
let spotify = require('spotify-node-applescript');

const EVENT_CONTROL_SPOTIFY = 99;

const EventValue = {
    ANY: 0,
    PLAY_PAUSE: 1,
    VOLUME_UP: 2,
    VOLUME_DOWN: 3,
    NEXT: 4,
    PREV: 5
}

console.log("Scanning for micro:bit...");
BBCMicrobit.discover(function(microbit) {
  //console.log(microbit);
  console.log("Discovered micro:bit: id = %s, address = %s", microbit.id, microbit.address);

  microbit.on('disconnect', function() {
    console.log("microbit disconnected!");
    process.exit(0);
  });

  microbit.on('event', function(id, value) {
    console.log("on -> micro:bit event received event: %d value: %d", id, value);

    switch(value) {
      case EventValue.PLAY_PAUSE:
        spotify.playPause(() => {
          console.log("play/pause");
        })
        break;

      case EventValue.VOLUME_UP:
        spotify.volumeUp(() => {
          console.log("volume up");
        });
        break;

      case EventValue.VOLUME_DOWN:
        spotify.volumeDown(() => {
          console.log("volume down");
        });
        break;
      
      case EventValue.NEXT:
        spotify.next(() => {
          console.log("next");
        });
        break;

      case EventValue.PREV:
        spotify.previous(() => {
          console.log("previous");
        });
        break;
    }
  });

  console.log("Connecting to micro:bit...");
  microbit.connectAndSetUp(() => {
    console.log("Connected");

    console.log("Subscribing to event EVENT_CONTROL_SPOTIFY and any event value...");
    microbit.subscribeEvents(EVENT_CONTROL_SPOTIFY, EventValue.ANY, function() {
      console.log("Subscribed");
    });

  });
});
