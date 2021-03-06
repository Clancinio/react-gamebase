// Function to resize image
export const resizeSmall = (imagePath, size) => {
  let image;
  if (imagePath) {
    image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
  } else {
    image = "https://picsum.photos/200/300";
  }

  return image;
};


