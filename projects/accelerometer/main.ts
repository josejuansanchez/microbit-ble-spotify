const EPSILON = 32;

basic.forever(() => {

    let x = input.acceleration(Dimension.X);

    basic.clearScreen();

    if (x >= -EPSILON && x <= EPSILON) {
        led.plot(2, 2);
    } else if (x > EPSILON) {
        basic.showArrow(2);
    } else if (x < -EPSILON) {
        basic.showArrow(6);
    }

    serial.writeLine("x:" + x);
});
