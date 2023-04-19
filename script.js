document.querySelectorAll('a[href^="#course"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var myList = document.getElementById("my-list");
var startValue = 4;
var listItem = myList.getElementsByTagName("li");
for (var i = 0; i < listItem.length; i++) {
  listItem[i].setAttribute("value", startValue++);
}