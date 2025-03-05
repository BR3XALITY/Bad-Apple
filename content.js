// Store replaced images to avoid replacing them again
let replacedImages = new Set();

// Function to replace images
function replaceImages() {
  const replacementImageUrl = 'https://www.dropbox.com/s/ewamdtdx4ouu83f/lv_0_20250302114105-ezgif.com-optimize.gif?st=oy6j0kcj&dl=1'; // Corrected Dropbox link
  
  setInterval(() => {
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      if (!replacedImages.has(img.src)) {
        img.src = replacementImageUrl;
        replacedImages.add(img.src);
      }
    });
  }, 1000); // Every 1 second
}
