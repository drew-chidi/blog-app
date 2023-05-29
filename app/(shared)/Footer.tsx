import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
      <div className='justify-between mx-auto gap-16 sm:flex'>
        {/* FIRST COLUMN */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
          <p className='my-5'>Description here...</p>
          <p className='my-5'>Blog of the Future All Rights Reserved</p>
        </div>
        {/* SECOND COLUMN */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>LINKS</h4>
          <p className='my-5'>Random Links</p>
          <p className='my-5'>Random links</p>
          <p className=''>Random links</p>
        </div>
        {/* THIRD COLUMN */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>CONTACT</h4>
          <p className='my-5'>Description here...</p>
          <p className='my-5'>Blog of the Future All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
