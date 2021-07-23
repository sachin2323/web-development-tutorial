var element = document.getElementsByClassName("ball");
window.addEventListener("click", function (event) {
  const { clientX, clientY } = event;
  element[0].style.transform = `translate(${clientX - 50}px,${clientY - 50}px)`;
});
