import React from 'react'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'
import SocialMedia from '../components/SocialMedia'
import SliderArtikel from '../components/SliderArtikel'
import Footer from '../components/Footer'

const Artikel = () => {
  return (
    <>
      <Menu />
      <Container fluid className="contArtikel">
        <SocialMedia />
        <div className="containerArtikel">
          <div className="artikel">
            <div className="textArtikel">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nesciunt assumenda totam commodi nostrum ducimus illum, perspiciatis voluptatum aperiam quibusdam.</p>
            </div>
            <div className="embedInstagram">
              <div className="elfsight-app-b507292a-74b4-4f15-b347-5adc8613d534"></div>
            </div>
          </div>
        </div>
        <SliderArtikel />
      </Container>
      <Footer />
    </>
  )
}

export default Artikel