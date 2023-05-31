setInterval(() => {
  var day = new Date();
  var hh = day.getHours();
  var mm = day.getMinutes();
  var ss = day.getSeconds();
  const hour = 30 * hh + mm / 2;
  const minute = 6 * mm;
  const second = 6 * ss;
  hrs.style.transform = `rotatez(${hour}deg)`;
  mins.style.transform = `rotatez(${minute}deg)`;
  secs.style.transform = `rotatez(${second}deg)`;
});

setInterval(() => {
  var day = new Date();
  var hh = day.getHours();
  var mm = day.getMinutes();
  var ss = day.getSeconds();
  const hour = 30 * hh + mm / 3;
  const minute = (6 * mm) / 2;
  const second = (6 * ss) / 2;
  hrn.style.transform = `rotatez(${hour}deg)`;
  minn.style.transform = `rotatez(${minute}deg)`;
  secn.style.transform = `rotatez(${second}deg)`;
});

setInterval(() => {
  var day = new Date();
  var hh = day.getHours();
  var mm = day.getMinutes();
  var ss = day.getSeconds();
  const hour = 40 * hh + mm / 5;
  const minute = (6 * mm) / 4;
  const second = (6 * ss) / 4;
  hrl.style.transform = `rotatez(${hour}deg)`;
  minl.style.transform = `rotatez(${minute}deg)`;
  secl.style.transform = `rotatez(${second}deg)`;
});

setInterval(() => {
  var day = new Date();
  var hh = day.getHours();
  var mm = day.getMinutes();
  var ss = day.getSeconds();
  const hour = 80 * hh + mm / 5;
  const minute = (8 * mm) / 4;
  const second = (8 * ss) / 4;
  hrh.style.transform = `rotatez(${hour}deg)`;
  minh.style.transform = `rotatez(${minute}deg)`;
  sech.style.transform = `rotatez(${second}deg)`;
});

setInterval(() => {
  var day = new Date();
  var hh = day.getHours();
  var mm = day.getMinutes();
  var ss = day.getSeconds();
  const hour = 20 * hh + mm / 3;
  const minute = (4 * mm) / 6;
  const second = (4 * ss) / 6;
  hrt.style.transform = `rotatez(${hour}deg)`;
  mint.style.transform = `rotatez(${minute}deg)`;
  sect.style.transform = `rotatez(${second}deg)`;
});
