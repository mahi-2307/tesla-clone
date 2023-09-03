const openMenu = () => {
    document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
  console.log("openMenu function called");
};

const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector("aside").className = "";
};

document.getElementById("menu-btn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};
document.querySelector("aside button.close").onclick = (e) => {
  closeMenu();
};
document.querySelector(".backdrop").onclick = (e) => {
  closeMenu();
};
