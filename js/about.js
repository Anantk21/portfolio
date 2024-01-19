
  document.addEventListener('DOMContentLoaded', function () {
    // Get all certificate items
    const certificateItems = document.querySelectorAll('.certificate-item');

    // Add click event listener to each certificate item
    certificateItems.forEach(function (certificateItem) {
      certificateItem.addEventListener('click', function () {
        // Get the clicked certificate image source
        const imageUrl = this.querySelector('img').src;

        // Create a modal or container to display the full image
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        // Create an image element to display the full image
        const fullImage = document.createElement('img');
        fullImage.src = imageUrl;

        // Append the full image to the modal
        modal.appendChild(fullImage);

        // Append the modal to the body
        document.body.appendChild(modal);

        // Close the modal when clicking outside the image
        modal.addEventListener('click', function () {
          document.body.removeChild(modal);
        });
      });
    });
  });

