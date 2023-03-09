import React from 'react';
import Card from './Card';

interface ImageData {
  photo: string;
  prompt: string;
  __v: number;
  _id: string;
}

interface Props {
  images: ImageData[];
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

export const ShownImages = ({ images, setPrompt }: Props) => {
  return (
    <div className='grid lg:grid-cols-4 gap-2 mt-5'>
      {images.map(({ photo, prompt }) => {
        return <Card photo={photo} prompt={prompt} setPrompt={setPrompt} />;
      })}
    </div>
  );
};
