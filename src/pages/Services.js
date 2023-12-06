import './Services.css';
import shop1Img from '../assets/img/shop1.png';
import businessImg from '../assets/img/business-and-trade.png';

const Services=()=>{
    return(
        <>
            <section className="services">
                <h2 className="section-title">Layanan <span>Kami</span></h2>
                <p>Dapatkan <span>Top Level Domain</span> yang sempurna untuk mencerminkan visi dan tujuan bisnis Anda.</p>
                <br/>
                <div className='domain-card-container'>
                    <div className='domain-card'>
                        <div className='domain-name'>
                            .online
                        </div>
                        <div className='domain-price'>
                            Rp. 25.000,-<span>/Tahun</span>
                        </div>
                    </div>
                    <div className='domain-card'>
                        <div className='domain-name'>
                            .com
                        </div>
                        <div className='domain-price'>
                            Rp. 150.000,-<span>/Tahun</span>
                        </div>
                    </div>
                    <div className='domain-card'>
                        <div className='domain-name'>
                            .shop
                        </div>
                        <div className='domain-price'>
                            Rp. 25.000,-<span>/Tahun</span>
                        </div>
                    </div>
                </div>
                <p>Dapatkan <span>Hosting</span> untuk bisnis anda.</p>
                <div className='hosting-card-container'>
                    <div className='hosting-card'>
                        <div className='hosting-name'>
                            Paket Bulanan
                        </div>
                        <div className='hosting-price'>
                            Rp. 120.000,-<span>/Bulan</span>
                        </div>
                    </div>
                    <div className='hosting-card'>
                        <div className='hosting-name'>
                            Paket Tahunan
                        </div>
                        <div className='hosting-price'>
                            Rp. 420.000,-<span>/Tahun</span>
                        </div>
                    </div>
                </div>
                <p>Dapatkan Website <span>SEO</span> friendly untuk bisnis anda.</p>
                <div className='seo-card-container'>
                    <div className='seo-card'>
                        <div className='seo-name'>
                            SEO
                        </div>
                        <div className='seo-price'>
                            Rp. 75.000,-<span>/Tahun</span>
                        </div>
                    </div>
                </div>
                <br/>
                <p>Tersedia pilihan paket sesuai <span className='sp2'>budget</span> dan <span>fitur</span> yang Anda butuhkan.</p>
                <br/>
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
                <h1>Pembelian sudah termasuk bantuan <span>24 jam</span> dari tim support kami.</h1>
                <br/>
            </section>
        </>
    )
};

export default Services;