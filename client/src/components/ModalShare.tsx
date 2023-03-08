import { ReactNode } from 'react';
import {
  TwitterShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  FacebookShareButton,
  TwitterIcon,
  TelegramIcon,
  TelegramShareButton
} from 'react-share';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
}
function ModalShare({ setModal, url }: Props) {
  const closeModal = () => setModal(false);

  return (
    <div>
      <div className='fixed z-10 inset-0 overflow-y-auto sm: mt-20'>
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 '>
          <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
            <div onClick={closeModal} className='absolute inset-0 bg-gray-500 opacity-75'></div>
          </div>

          <div className='inline-block  align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  lg:w-96 h-auto sm: w-96  animate-zoomIn'>
            <div className='bg-white px-4 pt-4 pb-4 sm:p-6 sm:pb-4 '>
              <div className='sm:flex sm:items-start'>
                <div className='mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full'>
                  <h3
                    className='text-2xl text-center leading-6 font-bold text-gray-900 '
                    id='modal-headline'
                  >
                    Share On Socials
                  </h3>
                  <div className='flex flex-col justify-center items-start gap-4 ml-14'>
                    <div className='flex gap-2 text-lg mt-5'>
                      <TwitterIcon size={32} round={true} />
                      <TwitterShareButton url={url}>Share on Twitter </TwitterShareButton>
                    </div>
                    <div className='flex gap-2 text-lg'>
                      <FacebookIcon size={32} round={true} />
                      <FacebookShareButton url={url}>Share on Facebook</FacebookShareButton>
                    </div>
                    <div className='flex gap-2 text-lg'>
                      <PinterestIcon size={32} round={true} />
                      <PinterestShareButton media='' url={url}>
                        Share on Pinterest
                      </PinterestShareButton>
                    </div>

                    <div className='flex gap-2 text-lg'>
                      <TelegramIcon size={32} round={true} />
                      <TelegramShareButton url={url}>Share on Telegram </TelegramShareButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalShare;
