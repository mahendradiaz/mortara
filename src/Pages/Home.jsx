import React from 'react'
import '../style/home.css'
import MortaraLogo from '../img/Mortara-Black.png'
import whyMortara from '../img/whymortara.png'
import Testimoni from '../components/Testimoni'
import Footer from '../components/Footer'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <Menu />
    <Container fluid className="content1">
        <div className="Image">
            <div className="container-image">
                <div className="Paragraf">
                    <h1>
                        Nothing
                        <br/> 
                        But 
                        <br/> 
                        Perfections 
                    </h1>
                </div>
                <div className="Link">
                    <div className="whatsapp">
                        <a href=""><i class="ri-whatsapp-line"></i></a>
                    </div>
                    <div className="instagram">
                        <a href=""><i class="ri-instagram-line"></i></a>
                    </div>
                </div>
                <div className="tag">
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
            <div className="container">
                <h1>Why Mortara?</h1>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsam officia itaque debitis doloremque ipsum earum natus cumque perspiciatis voluptatibus. Dignissimos delectus suscipit corporis ad non vitae numquam cumque sed accusamus? Ipsam delectus, esse quasi impedit voluptate dolorum reiciendis quis facilis nemo eum accusantium adipisci error exercitationem laborum laudantium. Nulla.</p>
            </div>
        </div>
        <div className="image-container">
            <div className="container">
                <img src={ whyMortara } alt="" className="img-mortara"/>
                <h3 className="mt-5">#nothingbutperfections</h3>
            </div>
        </div>
    </div>
</Container>

    <div className="hero min-h-screen">
        <div className="content-hero">
            <h1 className="text">Nothing But Perfections</h1>
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button> */}
        </div>
    </div>
    <div className="testimoni">
        <div className="reviews">
            <Testimoni />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Home