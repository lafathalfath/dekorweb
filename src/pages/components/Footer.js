import './Footer.css';
import wa from '../../assets/img/wa-icon.png';
import tiktok from '../../assets/img/tioktiok-icon.png';
import ig from '../../assets/img/ig-icon.png';

const Footer=()=>{
    return(
        <footer>
            <div className="footer-container">
                <p>Copyright &copy; 2023 <span>Dekor Web</span>. All rights reserved.</p>
                <div className="social">
                    <a href='https://wa.me/6288212108170' target='_blank' rel="noopener noreferrer"><img src={wa} alt="" className='footer-icon'/></a>
                    <a href='https://www.tiktok.com/@dekorweb' target='_blank' rel="noopener noreferrer"><img src={tiktok} alt="" className='footer-icon'/></a>
                    <a href='https://www.instagram.com/dekorweb/' target='_blank' rel="noopener noreferrer"><img src={ig} alt="" className='footer-icon'/></a>
                </div>
            </div>
        </footer>
    )
};
export default Footer;