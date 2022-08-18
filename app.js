keys = document.querySelectorAll(".key");

function playAudio(newUrl) {
  new Audio(newUrl).play();
}

keys.forEach((key, i) => {
//   const number = i < 9 ? "0" + (i + 1) : i + 1;
    const keys = ['02','04','06',    '09','11',        '14','16','18',      '21','23',
                    '01','03','05','07','08','10','12','13','15','17','19','20','22','24']
  const newUrl = "Piano-Keys-Audio/key" + keys[i] + ".mp3";
  key.addEventListener("click", () => playAudio(newUrl));
});
