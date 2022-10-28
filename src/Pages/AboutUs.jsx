import React from 'react'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'
import SocialMedia from '../components/SocialMedia'
import MortaraWhiteLogo from '../img/Mortara-White.png'
import contentAbout1 from '../img/contentAbout1.png'
import contentAbout2 from '../img/contentAbout2.png'
import VisionMission from '../img/vision-mission.png'
import OurService from '../img/our-service.png'
import OurService2 from '../img/our-service2.png'
import OurService3 from '../img/our-service3.png'
import Footer from '../components/Footer'

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
                <SocialMedia />
            </div>
        </div>
      </Container>
      <h1 className="hashtag">#aboutus</h1>

      <Container fluid className="containerContentAbout">
          <div className="contentAbout">
            <h1>About Us</h1>
            <p>Mortara adalah perusahaan yang menyediakan solusi terintegrasi dari perencanaan, desain, jasa konsultasi dan konstruksi. Tim kami berfokus pada kebutuhan dan keinginan dari klien. Kami tim yang yang dapat diandalkan untuk membantu membuat desain sempurna menjadi kenyataan.</p>
            <img src={ contentAbout1 } alt="" />
          </div>
          <div className="contentAbout">
            {/* <h1>About Us</h1> */}
            <p className="contentAbout2">Kami siap dengan semua pendukung yang diperlukan mulai dari perencanaan anggaran, desain, dan juga pembangunan. Tentunya tujuan kami adalah untuk menyelesaikan tugas dengan hasil terbaik.</p>
            <img src={ contentAbout2 } alt="" />
          </div>
      </Container>

      <h1 className="hashtag2 p-3">#nothingbutperfection</h1>
      <h1 className="hashtag2 p-3">#visionmission</h1>

      <Container fluid className="containerVisiMission">
        <div className="visionMission">
          <div className="textVisiMission">
            <h1>Vision & Mission</h1>
            <p>Seiring berjalannya waktu untuk menjadi mitra solusi terintegrasi dalam desain dan konstruksi. Kami bertujuan untuk memperluas wilayah layanan di Indonesia. Kami memastikan untuk memberikan hasil terbaik dan menjadi mitra yang dapat diandalkan.</p>
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
      <Footer />
    </>
  )
}

export default AboutUs