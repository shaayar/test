const cDot = document.querySelector("[data-cursor-dot]");
const cOutline = document.querySelector("[data-cursor-outline]");
// console.log(h);

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  // console.log(posX, posY);

  cDot.style.left = `${posX}px`;
  cDot.style.top = `${posY}px`;


  cOutline.animate(
    { left: `${posX}px`, top: `${posY}px`},
    {
      duration: 500,
      easing: 'linear',
      fill: 'forwards'
    }
  )

})

const h = document.querySelectorAll(".hover");
h.forEach(function (element) {
  element.addEventListener(
    "mouseenter",
    function (e) {
      cOutline.innerHTML = "Hello"
      console.log(e)
    }
  )
  element.addEventListener(
    "mouseleave",
    function (er) {
      console.log(er)
    }
  )
})
// console.log(h);
// const applyHoverEffect = (element, initialSize, enlargedSize) => {
//   element.addEventListener("mouseenter", () => {
//     cDot.style.width = enlargedSize;
//     cDot.style.height = enlargedSize;
//   });

//   element.addEventListener("mouseleave", () => {
//     cDot.style.width = initialSize;
//     cDot.style.height = initialSize;
//   });
// };



// applyHoverEffect(h, "10px", "20px");
// applyHoverEffect(h, "40px", "80px");