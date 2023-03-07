import React from 'react';

const Card = () => {
  return (
    <div className='rounded-xl card lg:w-50 lg:h-50 group relative shadow-card hover:shadow-cardhover '>
      <img
        className='w-full h-auto object-cover rounded-xl'
        src='https://oaidalleapiprodscus.blob.core.windows.net/private/org-xV1tz00VBlOATPT15kLyPAGV/user-GVKo5tOWC2t9x3rYVdXxobkR/img-DrQO54hVmlhCTUEI6S858nRO.png?st=2023-03-07T10%3A32%3A14Z&se=2023-03-07T12%3A32%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-07T04%3A39%3A56Z&ske=2023-03-08T04%3A39%3A56Z&sks=b&skv=2021-08-06&sig=tW3FwDJjOf6Wi7%2B16InJQkFhVFw%2B9%2BvZDp%2BhZeGORIE%3D'
        alt=''
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-sm overflow-y-auto prompt'>hi</p>

        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold'>
              tam
            </div>
            <p className='text-white text-sm'>tam</p>
          </div>
          <button type='button' className='outline-none bg-transparent border-none'>
            <img src='' alt='download' className='w-6 h-6 object-contain invert' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
