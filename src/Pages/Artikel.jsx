import React from 'react'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'
import SocialMedia from '../components/SocialMedia'
// import SliderArtikel from '../components/SliderArtikel'
import Footer from '../components/Footer'
import MortaraBlack from '../img/Mortara-Black.png'
import Swiper from '../components/Swiper'

// Import Image
import Artikel1 from '../img/portfolio1.png'
import Artikel2 from '../img/portfolio2.png'
import Artikel3 from '../img/portfolio3.png'

const Artikel = () => {

  const Image = () => {
    return <img src={Artikel1} alt="" />
  }
  const Image2 = () => {
    return <img src={Artikel2} alt="" />
  }
  const Image3 = () => {
    return <img src={Artikel3} alt="" />
  }

  return (
    <>
      <Menu />
      <Container fluid className="contArtikel">
        <SocialMedia />
          <div className="containerArtikel">
            <div className="mortaraArtikel">
              <img src={MortaraBlack} alt="" />
            </div>
            <div className="textArtikel">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem commodi explicabo dolore eligendi rerum pariatur voluptates quis corporis aliquam fugiat rem illo fuga incidunt dolor nisi distinctio dolores consectetur quo porro vero exercitationem, odio architecto delectus ipsam. Numquam, dicta?</p>
            </div>
            <div className="embedInstagram mb-5">
              <div className="elfsight-app-b507292a-74b4-4f15-b347-5adc8613d534"></div>
              <div className="taglineArtikel">
                <p>#article</p>
              </div>
            </div>
          </div>
        <Swiper image={Image()} image2={Image2()} image3={Image3()} />
      </Container>
      <Footer />
      {/* <div className="elfsight-app-b507292a-74b4-4f15-b347-5adc8613d534"></div> */}
    </>   
  )
}

export default Artikel