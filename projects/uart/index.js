/*
Emisor:

let data = new Buffer.from(text + "\r\n");
microbit.writeUart(data, () => {
    // Done
});  

Receptor:

bluetooth.startUartService();

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), () => {
    let receivedString = bluetooth.uartReadUntil(
        serial.delimiters(Delimiters.NewLine)
    );
    console.log("******: " + receivedString);
});
*/

// Ideas:
// - Obtener información del track que está sonando
// (Parece que hay problemas cuando se envían cadenas de más de N caracteres)
