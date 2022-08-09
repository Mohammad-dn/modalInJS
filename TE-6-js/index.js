const openModal = document.getElementById("modalOpenner");
const paraModal = document.getElementById("modalPara");
// paraModal.style.display="none"
openModal.addEventListener("click", (e) => {
    console.log(e.target);
  paraModal.style.display = "flex";
  paraModal.addEventListener("click", (e) => {
    console.log();
    e.target.parentElement.parentElement.style.backgroundColor="gray"
    paraModal.style.display = "none";
  });
  
});
