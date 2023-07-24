let container = document.querySelector(".ucapan-salam");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Selamat Pagi"
    : timeNow >= 12 && timeNow < 18
    ? "Selamat Siang"
    : "Selamat Malam";
container.innerHTML = `<h4>${greeting}</h4>`;

// // Part of Image gallery
// let galleryItems = document.querySelectorAll(".galleryItem");
// console.log(galleryItems);

// const closeLightBox = (galleryItem, overlay) => {
//   let originLinkTag = galleryItem.querySelector("a");
//   let image = overlay.querySelector("img");
//   let caption = overlay.querySelector("figcaption");

//   console.log("originLinkTag :", originLinkTag);
//   console.log("image :", image);
//   console.log("caption :", caption);

//   // move image and caption back to their original parents
//   originLinkTag.appendChild(image);
//   galleryItem.appendChild(caption);

//   // remove the light box overlay
//   document.body.removeChild(overlay);
// };

// const openLightBox = (galleryItem) => {
//   let part2 = document.getElementById("part-2");
//   // create the overlay to darken the page
//   let lightBoxOverlay = document.createElement("div");
//   lightBoxOverlay.classList.add("lightBoxOverlay");
//   part2.appendChild(lightBoxOverlay);
//   console.log("lightBoxOverlay :", lightBoxOverlay);

//   // create the close button
//   let lightBoxClose = document.createElement("a");
//   lightBoxClose.innerText = "X";
//   lightBoxClose.classList.add("closeButton");
//   lightBoxOverlay.appendChild(lightBoxClose);
//   console.log("lightBoxOverlay :", lightBoxOverlay);

//   // create a container for the image
//   let lightBoxImageContainer = document.createElement("figure");
//   lightBoxImageContainer.classList.add("container");
//   lightBoxOverlay.appendChild(lightBoxImageContainer);
//   console.log("lightBoxOverlay :", lightBoxOverlay);

//   // take the already existing image and move it into the overlay container
//   let image = galleryItem.querySelector("img");
//   lightBoxImageContainer.appendChild(image);
//   console.log("lightBoxImageContainer :", lightBoxImageContainer);

//   // take the already existing figcaption and move it into the overlay container
//   let caption = galleryItem.querySelector("figcaption");
//   lightBoxImageContainer.appendChild(caption);
//   console.log("lightBoxImageContainer :", lightBoxImageContainer);

//   // add a closing routine to close button
//   lightBoxClose.addEventListener("click", (e) => {
//     e.preventDefault();
//     closeLightBox(galleryItem, lightBoxOverlay);
//   });

//   // display the overlay
//   document.body.appendChild(lightBoxOverlay);
// };

// galleryItems.forEach((el) => {
//   let linkTag = el.querySelector(".p2 a");
//   linkTag.addEventListener("click", (e) => {
//     e.preventDefault();
//     openLightBox(el);
//   });
// });
