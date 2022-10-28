import React from 'react'
import MortaraLogo from '../img/Mortara-Black.png'
import whyMortara from '../img/whymortara.png'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'
import SocialMedia from '../components/SocialMedia'

// image import
import Portfolio1 from '../img/portfolio1.png'
import Portfolio2 from '../img/portfolio2.png'
import Portfolio3 from '../img/portfolio3.png'

const Home = () => {

    const Image = () => {
        return <img src={Portfolio1} alt="" />
      }
      const Image2 = () => {
        return <img src={Portfolio2} alt="" />
      }
      const Image3 = () => {
        return <img src={Portfolio3} alt="" />
    }
  return (
    <>
    <Menu />
    <Container fluid className="content1">
        <div className="Image">
            <div className="container-image">
                <div className="paragraf">
                    <h1>
                        Nothing
                        <br/> 
                        But 
                        <br/> 
                        Perfection
                    </h1>
                </div>
                <SocialMedia />
                <div className="tagLine">
                    <h3>#whymortara</h3>
                </div>
            </div>
        </div>
    </Container>

    <Container fluid className="content2">
        <div className="whyMortara">
            <div className="container-header">
                <img src={ MortaraLogo } alt="" className="logoMortara"/>
            </div>
            <div className="container-body">
                <div className="textMortara">
                    <h1>Why Mortara?</h1>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam officia itaque debitis doloremque ipsum earum natus cumque perspiciatis voluptatibus. Dignissimos delectus suscipit corporis ad non vitae numquam cumque sed accusamus? Ipsam delectus, esse quasi impedit voluptate dolorum reiciendis quis facilis nemo eum accusantium adipisci error exercitationem laborum laudantium. Nulla.</p>
                </div>
            </div>
            <div className="image-container">
                <div className="imgMortara">
                    <img src={ whyMortara } alt="" className="img-mortara"/>
                    <h3 className="mt-5 p-3">#nothingbutperfection</h3>
                </div>
            </div>
        </div>
    </Container>

    <div className="hero min-h-screen">
        <div className="content-hero">
            <h1 className="text">Design, Construction, Interior.</h1>
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button> */}
        </div>
    </div>
    <div className="testimoni">
        <div className="reviews">
            <Testimonial />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Home