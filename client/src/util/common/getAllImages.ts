import { useEffect, useState } from 'react';
function getAllImages() {
  const images_url = import.meta.env.VITE_POST_URL;

  const [images, setImages] = useState([]);

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(images_url, config);

        if (response.ok) {
          const { data } = await response.json();

          setImages(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  return { images };
}

export default getAllImages;
