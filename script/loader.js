
// const loaderHTML = `
//   <div id="global-loader" style="
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     background: white;
//     z-index: 9999;
//     top: 0;
//     left: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   ">
//     <div class="spinner-border text-success" role="status">
//       <span class="visually-hidden">Loading...</span>
//     </div>
//   </div>
// `;

// document.body.insertAdjacentHTML("afterbegin", loaderHTML);

// window.addEventListener("load", function () {
//   const loader = document.getElementById("global-loader");
//   if (loader) {
//     loader.style.display = "none";
//   }
// });
const loaderHTML = `
  <div id="global-loader" style="
    position: fixed;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 9999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  ">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML("afterbegin", loaderHTML);

window.addEventListener("load", function () {
  const loader = document.getElementById("global-loader");
  if (loader) {
    loader.style.display = "none";
  }
});
