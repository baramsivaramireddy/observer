export const renderDetectedObjects = (objects, ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const font = "16px sans-serif";
  ctx.font = font;

  ctx.textBaseline = "top";

  objects.forEach((object) => {
    const [x, y, width, height] = object["bbox"];

    // bounding box
    ctx.strokeStyle = "#00ff44";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);

    // ctx.fillStyle = `rgb(255,0,0)`;
    // ctx.fillRect(x, y, width, height);

    // Draw label background
    const textwidth = ctx.measureText(object.class).width;
    const textheight = parseInt(font, 10);
    ctx.fillRect(x, y, textwidth + 4, textheight + 4);

    ctx.fillStyle = "#00ff44";
    ctx.fillText(object.class, x, y);
  });
};
