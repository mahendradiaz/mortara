import React from 'react'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'
import '../style/home.css'
import '../style/artikel.css'

const Artikel = () => {
  return (
    <>
      <Menu />
      <div className="containerArtikel">
        <div className="artikel">
          <div className="textArtikel">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nesciunt assumenda totam commodi nostrum ducimus illum, perspiciatis voluptatum aperiam quibusdam.</p>
          </div>
          <div className="embedInstagram">
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Artikel