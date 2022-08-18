import React, {useState} from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {

  return (
    <div className='app__social'>
        <div>
          <a href='https://www.twitter.com'><BsTwitter/></a>
        </div>
        <div>
          <a href='https://www.facebook.com/warrd.alburom'><FaFacebookF/></a>
        </div>
        <div>
        <a href='https://www.instagram.com/wb7_'><BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia