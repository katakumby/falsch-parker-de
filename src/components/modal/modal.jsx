import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#modals');

const Modal = ({ isOpen, onClose, children }) => {
  const hideScrollBar = () => {
    document.body.classList.add('disable-scrolling');
  };

  const showScrollBar = () => {
    document.body.classList.remove('disable-scrolling');
  };

  return (
    <ReactModal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={hideScrollBar}
      onAfterClose={showScrollBar}
      className='w-full max-w-container rounded-[40px] border-0 bg-white p-20 outline-none max-lg:rounded-card max-lg:p-10'
      style={{
        overlay: {
          zIndex: 99999,
          backdropFilter: 'blur(24px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <div>{children}</div>
    </ReactModal>
  );
};

export { Modal };
