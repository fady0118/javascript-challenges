function getImagePromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let img = new Image();
      img.src = url;
      img.alt = "scenic image";
      img.addEventListener("load", () => resolve(img));
      img.addEventListener("error", () =>
        reject(new Error(`failed to load image ${url}`))
      );
    }, 200);
  });
}

const images = [
  "https://scrimba.com/links/advancedjs-resources-images-scenic1",
  "https://scrimba.com/links/advancedjs-resources-images-scenic2",
  "https://scrimba.com/links/advancedjs-resources-images-scenic3",
];

async function preloadImages(imageUrlsArr) {
  const imgContainer = document.getElementById("img-container");
  const uploadContainer = document.getElementById("upload-container");
  try {
    const imagePromise1 = await getImagePromise(imageUrlsArr[0]);
    const imagePromise2 = await getImagePromise(imageUrlsArr[1]);
    const imagePromise3 = await getImagePromise(imageUrlsArr[2]);
    const results = await Promise.all([
      imagePromise1,
      imagePromise2,
      imagePromise3,
    ]);
    console.log("All images loaded successfully!");
    uploadContainer.setAttribute('style','display:none');
    results.forEach(result=>{
        imgContainer.append(result);
    })
  } catch (error) {
    console.log(error)
  }
}

document
  .getElementById("submit-imgs")
  .addEventListener("click", () => preloadImages(images));
