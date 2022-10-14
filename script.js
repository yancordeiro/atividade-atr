var elms = document.getElementsByClassName("splide");
console.log(elms.length);

for (var i = 0; i < elms.length; i++) {
  new Splide(elms[i], {
    type: "loop",
    autoplay: true,
    interval: 3000,
  }).mount();
}

// const splide = new Splide(".splide", {
//   type: "loop",
//   autoplay: false,
//   arrows: true,
//   interval: 3000,
// }).mount();
