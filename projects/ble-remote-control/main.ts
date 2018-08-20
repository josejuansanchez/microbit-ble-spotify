/*
* BLE remote control for Spotify on macOS with Node.js and AppleScript.
* This script raise a custom event over BLE when the micro:bit buttons ared pressed.
* Users can perform several actions like play or pause tracks, turn volume up 
* or down and go to next or previous track.
*
* Although this script is using BLE there is no need to pair your micro:bit 
* with your Apple device. In order to get this, the pxt.json file has been 
* configured as follows. The property of the bluetooth json object called 'open' 
* has been configured with a value of 1 which means 'no security'.

    "yotta": {
        "config": {
            "microbit-dal": {
                "bluetooth": {
                    "open": 1
                }
            }
        }
    }  
* Reference:
* - http://bluetooth-mdw.blogspot.com/2016/08/how-to-switch-off-need-to-pair-your.html
* 
* Created by José Juan Sánchez, @josejuansanchez. August 20, 2018.
* Released under GNU GPL v3.
*/

enum state {
    DISCONNECTED_BLE = 0,
    CONNECTED_BLE = 1,
    PLAY_CONTROL = 2,
    VOLUME_CONTROL =  3,
    NEXT_PREV_CONTROL = 4
}

let current_state = state.DISCONNECTED_BLE;

const EVENT_CONTROL_SPOTIFY = 99;

enum EventValue {
    ANY = 0,
    PLAY_PAUSE = 1,
    VOLUME_UP = 2,
    VOLUME_DOWN = 3,
    NEXT = 4,
    PREV = 5
}

bluetooth.onBluetoothConnected(() => {
    current_state = state.CONNECTED_BLE;
})

bluetooth.onBluetoothDisconnected(() => {
    current_state = state.DISCONNECTED_BLE;
})

basic.forever(() => {
    switch (current_state) {
        case state.DISCONNECTED_BLE:
            basic.showString("D");
            break;

        case state.CONNECTED_BLE:
            basic.showString("C");
            break;

        case state.PLAY_CONTROL:
            basic.showString("P");
            break;
        
        case state.VOLUME_CONTROL:
            basic.showString("V");
            break;
        
        case state.NEXT_PREV_CONTROL:
            basic.showString("N");
            break;
    }
})

input.onButtonPressed(Button.A, () => {
    console.log("A");
    switch (current_state) {
        case state.PLAY_CONTROL:
            console.log("play/pause");
            control.raiseEvent(EVENT_CONTROL_SPOTIFY, EventValue.PLAY_PAUSE);
            break;

        case state.VOLUME_CONTROL:
            console.log("volume -");
            control.raiseEvent(EVENT_CONTROL_SPOTIFY, EventValue.VOLUME_DOWN);
            break;
        
        case state.NEXT_PREV_CONTROL:
            console.log("prev");
            control.raiseEvent(EVENT_CONTROL_SPOTIFY, EventValue.PREV);
            break;
    }
})

input.onButtonPressed(Button.B, () => {
    console.log("B");
    switch (current_state) {
        case state.VOLUME_CONTROL:
            console.log("volume +");
            control.raiseEvent(EVENT_CONTROL_SPOTIFY, EventValue.VOLUME_UP);
            break;

        case state.NEXT_PREV_CONTROL:
            console.log("next");
            control.raiseEvent(EVENT_CONTROL_SPOTIFY, EventValue.NEXT);
            break;
    }
})

input.onButtonPressed(Button.AB, () => {
    console.log("AB");
    switch (current_state) {
        case state.CONNECTED_BLE:
            current_state = state.PLAY_CONTROL;
            break;
        
        case state.PLAY_CONTROL:
            current_state = state.VOLUME_CONTROL;
            break;
        
        case state.VOLUME_CONTROL:
            current_state = state.NEXT_PREV_CONTROL;
            break;
        
        case state.NEXT_PREV_CONTROL:
            current_state = state.PLAY_CONTROL;
            break;
    }
})
