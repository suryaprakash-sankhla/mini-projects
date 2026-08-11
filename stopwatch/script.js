let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let msec = document.querySelector(".msec");
let stp = document.querySelector(".stop");
let res = document.querySelector(".res");

let milisec = 16.66666666666667;
let t = 0,
  tsec = 0,
  tmin = 0,
  thr = 0;
let st = 0,
  stsec = 0,
  stmin = 0,
  sthr = 0;
let sval = "normal";

stp.addEventListener("click", function () {
  if (sval == "normal") {
    stp.style.backgroundColor = "red";
    stp.style.color = "white";
    stp.style.border = "5px solid rgba(255, 84, 84, 1)";
    st = t;
    stsec = tsec;
    stmin = tmin;
    sthr = thr;
    clearInterval(tm);
    sval = "stop";
  } else {
    stp.style.backgroundColor = "#222";
    stp.style.color = " #a9a9a9";
    stp.style.border = "5px solid #555";
    tm = setInterval(function () {
      t++;
      if (
        t === 0 ||
        t === 1 ||
        t === 2 ||
        t === 3 ||
        t === 4 ||
        t === 5 ||
        t === 6 ||
        t === 7 ||
        t === 8 ||
        t === 9
      ) {
        msec.textContent = `.0${t}`;
      } else {
        msec.textContent = `.${t}`;
      }

      if (
        tsec === 0 ||
        tsec === 1 ||
        tsec === 2 ||
        tsec === 3 ||
        tsec === 5 ||
        tsec === 4 ||
        tsec === 6 ||
        tsec === 7 ||
        tsec === 8 ||
        tsec === 9
      ) {
        sec.textContent = `0${tsec}`;
      } else {
        sec.textContent = `${tsec}`;
      }

      if (
        tmin === 0 ||
        tmin === 1 ||
        tmin === 2 ||
        tmin === 3 ||
        tmin === 5 ||
        tmin === 4 ||
        tmin === 6 ||
        tmin === 7 ||
        tmin === 8 ||
        tmin === 9
      ) {
        min.textContent = `0${tmin}`;
      } else {
        min.textContent = `${tmin}`;
      }
      if (
        thr === 0 ||
        thr === 1 ||
        thr === 2 ||
        thr === 3 ||
        thr === 5 ||
        thr === 4 ||
        thr === 6 ||
        thr === 7 ||
        thr === 8 ||
        thr === 9
      ) {
        hr.textContent = `0${thr}`;
      } else {
        hr.textContent = `${thr}`;
      }

      if (t === 60) {
        msec.textContent = ".00";
        t = 0;
        tsec++;
      }
      if (tsec === 60) {
        sec.textContent = "00";
        tsec = 0;
        tmin++;
      }
      if (tmin === 60) {
        min.textContent = "00";
        tmin = 0;
        thr++;
      }
    }, milisec);
    sval = "normal";
  }
});

res.addEventListener("click", function () {
  t = 0;
  tsec = 0;
  tmin = 0;
  thr = 0;
  st = 0;
  stsec = 0;
  stmin = 0;
  sthr = 0;
});
res.addEventListener("mousedown", function () {
  res.style.backgroundColor = "#555";
});
res.addEventListener("mouseup", function () {
  res.style.backgroundColor = "#222";
});

let tm = setInterval(function () {
  t++;
  if (
    t === 0 ||
    t === 1 ||
    t === 2 ||
    t === 3 ||
    t === 4 ||
    t === 5 ||
    t === 6 ||
    t === 7 ||
    t === 8 ||
    t === 9
  ) {
    msec.textContent = `.0${t}`;
  } else {
    msec.textContent = `.${t}`;
  }

  if (
    tsec === 0 ||
    tsec === 1 ||
    tsec === 2 ||
    tsec === 3 ||
    tsec === 5 ||
    tsec === 4 ||
    tsec === 6 ||
    tsec === 7 ||
    tsec === 8 ||
    tsec === 9
  ) {
    sec.textContent = `0${tsec}`;
  } else {
    sec.textContent = `${tsec}`;
  }

  if (
    tmin === 0 ||
    tmin === 1 ||
    tmin === 2 ||
    tmin === 3 ||
    tmin === 5 ||
    tmin === 4 ||
    tmin === 6 ||
    tmin === 7 ||
    tmin === 8 ||
    tmin === 9
  ) {
    min.textContent = `0${tmin}`;
  } else {
    min.textContent = `${tmin}`;
  }
  if (
    thr === 0 ||
    thr === 1 ||
    thr === 2 ||
    thr === 3 ||
    thr === 5 ||
    thr === 4 ||
    thr === 6 ||
    thr === 7 ||
    thr === 8 ||
    thr === 9
  ) {
    hr.textContent = `0${thr}`;
  } else {
    hr.textContent = `${thr}`;
  }

  if (t === 60) {
    msec.textContent = ".00";
    t = 0;
    tsec++;
  }
  if (tsec === 60) {
    sec.textContent = "00";
    tsec = 0;
    tmin++;
  }
  if (tmin === 60) {
    min.textContent = "00";
    tmin = 0;
    thr++;
  }
}, milisec);
