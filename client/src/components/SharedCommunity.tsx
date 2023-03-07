import React from 'react';

interface Prop {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const SharedCommunity = ({ setModal }: Prop) => {
  return (
    <div className='mt-10'>
      <p className='mt-2 text-[#666e75] text-[14px]'>
        ** Once you have created the image you want, you can share it with others in the community
        **
      </p>
      <button
        onClick={() => setModal(true)}
        className='mt-3 text-white bg-[#6469ff] hover:bg-[#7276eb] marker:font-medium rounded-md text-l w-full sm:w-auto px-5 py-2.5 text-center'
      >
        Share with the Community
      </button>
    </div>
  );
};

export default SharedCommunity;
