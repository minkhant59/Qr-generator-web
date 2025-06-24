const qrInput = document.getElementById("qrInput");
const customCanvas = document.getElementById("customQR");

qrInput.addEventListener("input", () => {
  const value = qrInput.value.trim();
  if (value) {
    QRCode.toCanvas(customCanvas, value, {
      width: 150,
      color: { dark: '#ffffff', light: '#1a1a1a' }
    });
  } else {
    const ctx = customCanvas.getContext('2d');
    ctx.clearRect(0, 0, customCanvas.width, customCanvas.height);
  }
});
