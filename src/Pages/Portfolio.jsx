import React from 'react'
import Menu from '../components/Navbar'
import { Container } from 'react-bootstrap'
import Swiper from '../components/Swiper'
import Card from '../components/Card'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

// image import
import Portfolio1 from '../img/portfolio1.png'
import Portfolio2 from '../img/portfolio2.png'
import Portfolio3 from '../img/portfolio3.png'

const Portfolio = () => {


  // Props Swiper
  const Image = () => {
    return <img src={Portfolio1} alt="" />
  }
  const Image2 = () => {
    return <img src={Portfolio2} alt="" />
  }
  const Image3 = () => {
    return <img src={Portfolio3} alt="" />
  }



  // Props Cara Kerja
  const Title = () => {
    return <h1 className="titleText">Konsultasi</h1>;
  }
  const Typography = () => {
    return <p className="textTyphograph">Tahap pertama klien mendapatkan konsultasi secara gratis dengan tim arsitek secara garis besar, seperti memberikan referensi RAB dari perhitungan yang kami sediakan, perencanaan pembangunan, serta membantu Moodboard.</p>;
  }
  const Title2 = () => {
    return <h1 className="titleText">Survey dan Gambar arsitek</h1>;
  }
  const Typography2 = () => {
    return <p className="textTyphograph">Tahap kedua jika klien sepakat untuk menggunakan jasa Mortara Building Space, Anda dapat membayar tanda jadi kerjasama.</p>
  }
  const Title3 = () => {
    return <h1 className="titleText">Surat Perintah Kerja</h1>;
  }
  const Typography3 = () => {
    return <p className="textTyphograph">Di Tahap ketiga, jika klien sudah menyetujui RAB maka kami akan membuatkan Kontrak Kerja sama yang meliputi: <br/> <br/> 1. Hak dan kewajiban kotraktor dan klien <br/> <br/> 2. Jadwal dan Termin Pembayaran <br/> <br/> 3. Gambar kerja dan design <br/> <br/> 4. RAB <br/> <br/> 5. Spesiﬁkasi material</p>;
  }
  const Title4 = () => {
    return <h1 className="titleText">Pembayaran bertahap</h1>;
  }
  const Typography4 = () => {
    return <p className="textTyphograph">Kami akan membuatkan invoice pembayaran secara bertahap dengan komposisi termin yang telah disepakati bersama.</p>;
  }
  const Title5 = () => {
    return <h1 className="titleText">Tahap Pembangunan</h1>;
  }
  const Typography5 = () => {
    return <p className="textTyphograph">Pekerjaan yang kami lakukan sesuai dengan design, RAB, dan gambar kerja yang terlampir dalam surat kontrak kerja.</p>;
  }
  const Title6 = () => {
    return <h1 className="titleText">Berita Acara Serah Terima</h1>;
  }
  const Typography6 = () => {
    return <p className="textTyphograph">Jika proyek selesai, tim dan klien akan melakukan ceklist quality control dan memastikan pembangunan sesuai dengan design yang diinginkan oleh klien. Serta Garansi pemeliharan selama 1 bulan.</p>;
  }
  return (
    <>
    <Menu />

    <Container fluid className="content-portfolio">
        <div className="Image-portfolio">
            <div className="container-image">
                <div className="paragrafPortfolio">
                    <h1>Our Portfolio</h1>
                </div>
                <SocialMedia />
            </div>
        </div>
    </Container>
    
    <Swiper image={Image()} image2={Image2()} image3={Image3()}/>
    <Swiper image={Image3()} image2={Image()} image3={Image2()}/>

    <Container fluid className="containerCaraKerja">
      <div className="caraKerja">
        <div className="titleCaraKerja">
          <h1>Cara Kerja</h1>
        </div>
        <div className="contentCaraKerja">
          <Card  nomor="1." title={Title()} typography={Typography()} />
          <Card  nomor="2." title={Title2()} typography={Typography2()} />
          <Card  nomor="3." title={Title3()} typography={Typography3()} />
        </div>
        <div className="contentCaraKerja">
          <Card  nomor="4." title={Title4()} typography={Typography4()} />
          <Card  nomor="5." title={Title5()} typography={Typography5()} />
          <Card  nomor="6." title={Title6()} typography={Typography6()} />
        </div>
      </div>
    </Container>
    
    <Footer />
    </>
  )
}

export default Portfolio
