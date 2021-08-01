var element = document.getElementsByClassName("ball");
console.log("element", element);
window.addEventListener("click", function (event) {
  console.log("event", event);
  const { clientX, clientY } = event;
  element[0].style.transform = `translate(${clientX - 50}px,${clientY - 50}px)`;
});
