setInterval(() => {
  var day = new Date();
  var hh = day.getHours();
  var mm = day.getMinutes();
  var ss = day.getSeconds();
  const hour = 30 * hh + mm / 2;
  const minute = 6 * mm;
  const second = 6 * ss;
  hr.style.transform = `rotatez(${hour}deg)`;
  min.style.transform = `rotatez(${minute}deg)`;
  sec.style.transform = `rotatez(${second}deg)`;
});
