import React from 'react'
import styles from './Footer.module.css'
import styled from 'styled-components'
import {Github} from '@styled-icons/bootstrap'

const WhiteGit = styled(Github)`color:white; width:32px;`

function Footer() {

  
  return (
    <div className={styles.footerContainer}>
      <h1>Baltej's Store</h1>
      <div>
        <a rel="noopener noreferrer" target="_blank" href='https://github.com/brandhawa99/shoppingcart_odin'>
          <WhiteGit />
        </a>
      </div>
    </div>
  )
}

export default Footer