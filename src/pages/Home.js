import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Home.css";
import posterfoto1 from '../assets/img/posterfoto1.png';
import posterTemplate from '../assets/img/poster-template.png';
import shop1Img from '../assets/img/shop1.png';
import businessImg from '../assets/img/business-and-trade.png';
import hargaTerjangkau from '../assets/img/hargaTerjangkau.png';
import desainMenarik from '../assets/img/desainMenarik.png';
import konsultasiGratis from '../assets/img/konsultasiGratis.png';
import kelolaMudah from '../assets/img/kelolaMudah.png';
import  modulLengkap from '../assets/img/modulLengkap.png'

const Home = ()=>{
    return(
        <>
            <section className="jumbotron">
                <Slide autoplay={false} classNames="slides">
                    <div className="slide1">
                        <div className="slide1-txt">
                            <h1>Buka Peluang Bisnis Anda, Mulailah dari Kami</h1>
                            <p>Kami hadir dengan solusi praktis dan harga terjangkau, untuk menghemat tenaga, waktu, dan biaya dalam membuat website.</p><br/><br/>
                            <a href='https://wa.me/6288212108170' target='_blank' rel="noopener noreferrer" className="orderbtn">Pesan Sekarang</a>
                        </div>

                        <div className="slide1-img">
                            <img src={posterfoto1} alt=""/>
                        </div>
                    </div>

                    <div className="slide2">
                        <div className="slide2-txt">
                            <h1>
                                <Link to="/catalog">
                                    <span className="sp1">Pilih Desain</span>
                                </Link>&emsp;Kustomisasi
                            </h1>
                            <p>Jelajahi <span>beragam opsi</span> desain website yang menakjubkan dan sesuai dengan kebutuhan bisnis Anda.
Dengan kemudahan <span>kustomisasi</span>, website impianmu dapat menjadi kenyataan.</p>
                        </div>
                        <div className="slide2-img"><img src={posterTemplate} alt=""/></div>
                    </div>
                </Slide>
            </section>

            <section className="paket">
                <h2 className="section-title">Paket Apa yang <span>Cocok</span> untuk Saya</h2>
                <p>Serahkan semua pada kami!<br/>
Proses membuat website, mulai dari layout hingga desain halaman, ditangani oleh developer kami sehingga Anda hanya perlu memikirkan konten yang ingin disajikan.</p><br/>
                <div className="card-container">
                    <div className="card">
                        <div className="card-title">
                            <img src={shop1Img} alt=""/>
                            <div className="card-title-1">
                                Paket <span>UMKM</span>
                            </div>
                        </div>
                        <br/>
                        <div className="price">Rp. 179.999,-</div>
                        
                        <ul>
                            <li>✔ Pembuatan landing page</li>
                            <li>✔ Panduan mengelola web</li>
                            <li>✔ Free Domain 1 tahun</li>
                            <li>✔ Free Hosting 1 bulan</li>
                            <li>✔ Free Hingga 135.000 Pengunjung/Bulan</li>
                            <li>✔ Unlimited Akun Email</li>
                            <li>✔ Unlimited Bandwidth</li>
                            <li>✔ Unlimited Database</li>
                            <li>✔ Unlimited SSD Disk Space</li>
                            <li>✔ Unlimited Add-On Domain</li>
                            <li>✔ Gratis Sertifikat SSL</li>
                        </ul>

                        <div className="tld-domain">TLD .shop atau .online</div>
                    </div>
                    <div className="card">
                        <div className="card-title">
                            <img src={businessImg} alt=""/>
                            <div className="card-title-1">
                                Paket <span>Bisnis</span>
                            </div>
                        </div>
                        <br/>
                        <div className="price">Rp. 349.999,-</div>

                        <ul>
                            <li>✔ Pembuatan landing page</li>
                            <li>✔ Panduan mengelola web</li>
                            <li>✔ Free Domain 1 tahun</li>
                            <li>✔ Free Hosting 1 bulan</li>
                            <li>✔ Free Hingga 135.000 Pengunjung/Bulan</li>
                            <li>✔ Unlimited Akun Email</li>
                            <li>✔ Unlimited Bandwidth</li>
                            <li>✔ Unlimited Database</li>
                            <li>✔ Unlimited SSD Disk Space</li>
                            <li>✔ Unlimited Add-On Domain</li>
                            <li>✔ Gratis Sertifikat SSL</li>
                        </ul>

                        <div className="tld-domain">TLD .com</div>
                    </div>
                </div>
                <br/><br/>
                <a href='https://wa.me/6288212108170' target='_blank' rel="noopener noreferrer" className="orderbtn">Pesan Sekarang</a>
            </section>

            <section className="contact">
                <div>
                    <h2 className="section-title">Perlu <span>Bantuan</span> dari Tim?</h2>
                    <p>Langsung saja hubungi tim support kami kapan pun Anda membutuhkan bantuan.
Klik “Hubungi Kami “</p><br/>
                    <Link to="/contact" className="orderbtn">Hububngi Kami</Link>
                </div><br/>
            </section>

            <section className="whyus">
                <h2 className="section-title">Mengapa <span>Harus</span> di Dekor Web?</h2>
                <p>Menawarkan pembuatan website, hosting, domain, dan SEO,  dengan praktis dan tentunya dengan biaya yang terjangkau. Dengan memiliki website pribadi, Anda akan terlihat lebih mudah ditemukan di internet.</p>
                <div className="card-container">
                    <div className="card card-whyus">
                        <img src={hargaTerjangkau} alt=""/>
                        <div className="card-caption">Harga Terjangkau</div>
                    </div>
                    <div className="card card-whyus">
                        <img src={desainMenarik} alt=""/>
                        <div className="card-caption">Desain Menarik</div>
                    </div>
                    <div className="card card-whyus">
                        <img src={konsultasiGratis} alt=""/>
                        <div className="card-caption">Konsultasi Gratis</div>
                    </div>
                    <div className="card card-whyus">
                        <img src={kelolaMudah} alt=""/>
                        <div className="card-caption">Kelola Mudah</div>
                    </div>
                    <div className="card card-whyus">
                        <img src={modulLengkap} alt=""/>
                        <div className="card-caption">Modul Lengkap</div>
                    </div>
                </div>
            </section>
        </> 
    )
};

export default Home;