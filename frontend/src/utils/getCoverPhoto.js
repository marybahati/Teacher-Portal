const coverPhotos = {
    "assets/image1.webp": require('../assets/image1.webp').default,
    "assets/image2.webp": require('../assets/image2.webp').default,
    "assets/image3.webp": require('../assets/image3.webp').default,
    "assets/image4.webp": require('../assets/image4.webp').default,
    "assets/image5.webp": require('../assets/image5.webp').default,
    "assets/image6.webp": require('../assets/image6.webp').default,
    "assets/image7.webp": require('../assets/image7.webp').default,
    "assets/image8.webp": require('../assets/image8.webp').default,
    "assets/image9.webp": require('../assets/image9.webp').default,
    "assets/image10.webp": require('../assets/image10.webp').default,
  };
  
  export const getCoverPhoto = (coverPhotoURL) => coverPhotos[coverPhotoURL];
  