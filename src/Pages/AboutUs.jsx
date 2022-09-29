import React from 'react'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'
import '../style/home.css'
import '../style/about.css'
import MortaraWhiteLogo from '../img/Mortara-White.png'
// import MortaraBlackLogo from '../img/Mortara-Black.png'
import contentAbout1 from '../img/contentAbout1.png'
import contentAbout2 from '../img/contentAbout2.png'
import VisionMission from '../img/vision-mission.png'
import OurService from '../img/our-service.png'
import OurService2 from '../img/our-service2.png'
import OurService3 from '../img/our-service3.png'

const AboutUs = () => {
  return (
    <>
      <Menu />
      <Container fluid className="content-aboutus">
        <div className="Image-aboutus">
            <div className="container-image">
                <div className="paragraf">
                    <img src={ MortaraWhiteLogo } alt="" />
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

      <Container fluid className="containerVisiMission">
        <div className="visionMission">
          <div className="textVisiMission">
            <h1>Vision & Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quae quidem excepturi! Molestiae iste numquam blanditiis delectus aspernatur cumque qui accusamus illo voluptatum sequi quos omnis, nulla pariatur sed. Tenetur?</p>
          </div>
          <div className="imgVisiMission">
            <img src={ VisionMission } alt="" />
          </div>
        </div>
      </Container>

      <Container fluid className="containerOurService">
        <div className="ourService">
          <div className="card">
            <h1>Architecture</h1>
            <img src={ OurService } alt="" />
            <p>On team will be delighted to contemplate the harmony of functionality and aesthetics. Help to explore the structure you adore.</p>
          </div>
          <div className="card">
            <h1>Interior Design</h1>
            <img src={ OurService2 } alt="" />
            <p>Give you professional insight to decorate and adding interior detail. Arrange the room and create positive vibes.</p>
          </div>
          <div className="card">
            <h1>Construction</h1>
            <img src={ OurService3 } alt="" />
            <p>Provide a skilled team to proceed with the construction. Bring the arrangement and blueprint to reality.</p>
          </div>

        </div>
      </Container>
    </>
  )
}

export default AboutUs