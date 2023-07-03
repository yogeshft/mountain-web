window.addEventListener("scroll", handleScroll);

function handleScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";
}
// document.getElementByClassName("btnChange").addEventListener("click", changeBackground);
// function changeBackground() {
//     var element = document.getElementsByClassName("tabs");

//     element.style.backgroundImage = "url('tab-2.png')";
//   }

const nav4Item1 = document.getElementById("nav-home-tab");
const nav4Item2 = document.getElementById("nav-profile-tab");
const sect4Bg = document.getElementsByClassName("accordion-body");

// console.log("1.", nav4Item1);
// console.log("2.", nav4Item2);
// console.log("3.", sect4Bg);

nav4Item1.addEventListener("click", () => {
  document.getElementsByClassName("nav-4-item")[0].classList.toggle("active");
  document.getElementsByClassName("nav-4-item")[1].classList.toggle("active");
  sect4Bg[0].style.backgroundImage = "url('assets/Images/tab-1.png')";
});

nav4Item2.addEventListener("click", () => {
  document.getElementsByClassName("nav-4-item")[0].classList.toggle("active");
  document.getElementsByClassName("nav-4-item")[1].classList.toggle("active");
  sect4Bg[0].style.backgroundImage = "url('assets/Images/tab-2.png')";
});
