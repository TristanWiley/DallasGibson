var container = document.getElementsByClassName('vid-list-container')[0];

container.addEventListener("wheel", function (e) {
  e.preventDefault();
  if (e.deltaY > 0) container.scrollLeft += 100;
  else container.scrollLeft -= 100;
});