// Function to resize image
const resizeSmall = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? // This line is for resizing the screenshots
      imagePath.replace(
        "/media/screenshots/",
        `media/resize/${size}/-/screenshots`
      )
    : // This line is for resizing the big main image
      imagePath.replace("/media/games/", `media/resize/${size}/-/games`);
      return image;
};
