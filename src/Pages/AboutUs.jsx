import React from 'react'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'
import '../style/home.css'
import '../style/about.css'
import MortaraWhiteLogo from '../img/Mortara-White.png'
import MortaraBlackLogo from '../img/Mortara-Black.png'
import contentAbout1 from '../img/contentAbout1.png'
import contentAbout2 from '../img/contentAbout2.png'

const AboutUs = () => {
  return (
    <>
      <Menu />
      <Container fluid className="content-aboutus">
        <div className="Image-aboutus">
            <div className="container-image">
                <div className="Paragraf">
                    <img src={MortaraWhiteLogo} alt="" />
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
      <h1 className="hashtag">#aboutus</h1>

      <Container fluid className="containerContentAbout">
          <div className="contentAbout">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veritatis odit possimus cum necessitatibus voluptate cupiditate, ipsam minus. Sequi, officia.</p>
            <img src={ contentAbout1 } alt="" />
          </div>
          <div className="contentAbout">
            {/* <h1>About Us</h1> */}
            <p className="contentAbout2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veritatis odit possimus cum necessitatibus voluptate cupiditate, ipsam minus. Sequi, officia.</p>
            <img src={ contentAbout2 } alt="" />
          </div>
      </Container>

      <h1 className="hashtag2">#nothingbutperfections</h1>
      <h1 className="hashtag2">#visionmission</h1>

      <Container>
        
      </Container>
    </>
  )
}

export default AboutUs