import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const PageFooter = () => {
  return (
    <Footer container>
      <div className='w-full justify-between'>
          <Footer.Divider/>
          <Footer.Copyright href="#" by="Jayvee Ann Soriano" year={2023} />
      </div>
    </Footer>
  )
}

export default PageFooter