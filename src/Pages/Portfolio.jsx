import React from 'react'
import Menu from '../components/Navbar'
import '../style/home.css'
import '../style/portfolio.css'
import { Container } from 'react-bootstrap'
import Swiper from '../components/Swiper'
import Card from '../components/Card'

const Portfolio = () => {
  return (
    <>
    <Menu />
    <Container fluid className="content-portfolio">
        <div className="Image-portfolio">
            <div className="container-image">
                <div className="Paragraf">
                    <h1>Our Portfolio</h1>
                </div>
                <div className="Link">
                    <div className="whatsapp">
                        <a href=""><i class="ri-whatsapp-line"></i></a>
                    </div>
                    <div className="instagram">
                        <a href=""><i class="ri-instagram-line"></i></a>
                    </div>
                </div>
            </div>
        </div>
      </Container>
      <Swiper />

      <Container fluid className="containerCaraKerja">
        <div className="caraKerja">
          <h1>Cara Kerja</h1>
          <div className="contentCaraKerja">
            <Card />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Portfolio