let loudness = require('loudness');

loudness.getVolume(function (err, vol) {
    let volume = vol;
    volume = volume + 5;
    if (volume > 100) volume = 100;
    loudness.setVolume(volume, function (err) {
        console.log("volume: " + volume);
    });
});

loudness.getVolume(function (err, vol) {
    let volume = vol;
    volume = volume - 5;
    if (volume < 0) volume = 0;
    loudness.setVolume(volume, function (err) {
      console.log("volume: " + volume);
    });
  });  

