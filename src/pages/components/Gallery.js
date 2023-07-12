import { useEffect } from 'react';
import fancybox from 'fancybox';

const Gallery = () => {
  useEffect(() => {
    // Initialize Fancybox when the component mounts
    fancybox.bind('[data-fancybox="gallery"]', {
      // Fancybox configuration options
      // You can customize the behavior and appearance here
    });

    return () => {
      // Clean up Fancybox when the component unmounts
      fancybox.destroy();
    };
  }, []);

  return (
    <div>
      {/* Your gallery HTML */}
    </div>
  );
};

export default Gallery;
