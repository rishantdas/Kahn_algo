import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

function SocialHeaders() {
  return (
    <div className="social__header">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/rishantdas" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.instagram.com/rishantdas/" target="_blank"><BsInstagram/></a>

    </div>
  )
}

export default SocialHeaders