import './Contact.css';
import jam from '../assets/img/clock.png';
import letak from '../assets/img/location.png';
import wa from '../assets/img/wa-icon.png';
import email from '../assets/img/email-icon.png';

const Contact=()=>{
    return(
        <section className='contact-page'>
            <h1>Hubungi <span>Kami</span></h1>
            <p>Selamat datang di layanan kami! Kami menghargai kepercayaan Anda dan siap melayani Anda dengan sepenuh hati.<br/>
Untuk kenyamanan dan kemudahan Anda, kami menyediakan layanan melalui WhatsApp dan Email.</p><br/><br/>
            <div className='waktu'>
                <div className='waku-img'><img src={jam} alt=""/></div>
                <div className='waktu-ket'>
                    <div>Senin-Jumat&emsp;: 08.00 - 19.00</div>
                    <div>Sabtu&emsp;&emsp;&emsp;&emsp;: 13.00 - 19.00</div>
                </div>
            </div>
            <div className='tempat'>
                <div className='tempat-img'><img src={letak} alt=""/></div>
                <div className='teempat-ket'>
                    <div>Jalan Lodaya,Babakan,Bogor tengah,Jawa Barat</div>
                </div>
            </div>
            <br/><br/>
            <div className='contact-link'>
                <a href='https://wa.me/6288212108170' target='_blank' rel="noopener noreferrer" className='contact-direct'>
                    <span className='direct-icon-wa'>
                        <img src={wa} alt=""/>
                    </span>
                    <div>+62 882 1210 8170</div>
                </a>
                <a href='mailto:dekorweb5@gmail.com' target='_blank' rel="noopener noreferrer" className='contact-direct'>
                    <span className='direct-icon-email'>
                        <img src={email} alt=""/>
                    </span>
                    <div>dekorweb5@gmail.com</div>
                </a>
            </div>
        </section>
    )
};

export default Contact;