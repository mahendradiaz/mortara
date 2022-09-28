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
          <div className="titleCaraKerja">
            <h1>Cara Kerja</h1>
          </div>
          <div className="contentCaraKerja">
              <Card 
                nomor="1."
                title="Konsultasi"
                typography="Tahap pertama klien mendapatkan konsultasi secara gratis dengan tim arsitek secara garis besar, seperti memberikan referensi RAB dari perhitungan yang kami sediakan, perencanaan pembangunan, serta membantu Moodboard."
              />
              <Card 
                nomor="2."
                title="Survey dan Gambar arsitek"
                typography="Tahap kedua jika klien sepakat untuk menggunakan jasa Mortara Building Space, Anda dapat mentrafser tanda jadi sebesar Rp. 10jt yang akan di bagi menjadi 2 termin pembayaran, yaitu: 1. 3jt ditahap awal pembayaran ini klien mendapatkan jasa dari tim seperti survey lokasi, pengukura n pembangun, schematic design, dan estimasi anggaran 2. 7jt ditahap kedua, jika sudah ada kesepakatan dari klien terhadap tahap pertama maka akan dilanjutkannya Rancangan 3D design pembangunan, DED, dan RAB."
              />

              <Card 
                nomor="3."
                title="Surat Perintah Kerja"
                typography="Di Tahap ketiga, jika klien sudah menyetujui RAB maka kami akan membuatkan Kontrak Kerja sama yang meliputi: 
                1. Hak dan kewajiban kotraktor dan klien
                2. Jadwal dan Termin Pembayaran
                3. Gambar kerja dan design
                4. RAB
                5. Spesiﬁkasi material"
              />
            </div>
            <div className="contentCaraKerja mt-5">
              <Card 
                nomor="4."
                title="Pembayaran bertahap"
                typography="Kami akan membuatkan invoice pembayaran secara bertahap dengan komposisi termin yang telah disepakati bersama."
              />
              <Card 
                nomor="5."
                title="Tahap Pembangunan"
                typography="Pekerjaan yang kami lakukan sesuai dengan design, RAB, dan gambar kerja yang terlampir dalam surat kontrak kerja."
              />

              <Card 
                nomor="6."
                title="Addendum Pekerjaan"
                typography="Perubahan, penambahan pekerjaan  dilakukan di tahap ini dengan pembuatan surat Addendum yang terpisah dari surat kontrak kerja, dan akan ditagihkan terpisah dalam invoice pembayaran yang berbeda."
              />
            </div>
          </div>
      </Container>
    </>
  )
}

export default Portfolio
