function generarId() {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const digits = chars.split('');
  const numberOfDigits = 16;

  let format = "XXXX-XXXX-XXXX-XXXX";

  for (var index = 0; index < numberOfDigits; index++) {
    let randomNumber = Math.floor(Math.random() * chars.length);

    format = format.replace('X', digits[randomNumber]);
  }

  return format;
}


