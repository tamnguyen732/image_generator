import { saveAs } from 'file-saver';

interface Args {
  imageUrl: string;
}

function downloadImage({ imageUrl }: Args) {
  const handleDownload = () => {
    window.open(imageUrl, '_blank');
  };

  return {
    handleDownload
  };
}

export default downloadImage;
