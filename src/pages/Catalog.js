import './Catalog.css';
import catalog1 from '../assets/img/catalog-1.png';
import catalog2 from '../assets/img/catalog-2.png';
import catalog3 from '../assets/img/catalog-3.png';
import catalog4 from '../assets/img/catalog-4.png';
import catalog5 from '../assets/img/catalog-5.png';
import catalog6 from '../assets/img/catalog-6.png';
import catalog7 from '../assets/img/catalog-7.png';
import catalog8 from '../assets/img/catalog-8.png';
import catalog9 from '../assets/img/catalog-9.png';

const Catalog=()=>{
    return(
        <section className='catalog-section'>
            <h2 className='section-title'>Pilihan <span>Desain</span></h2><br/>
            <p>Pilih desain template website yang sesuai dengan kebutuhan bisnis Anda.</p><br/>
            <div className='catalog-img-container'>
                <img src={catalog1} alt=''/>
                <img src={catalog2} alt=''/>
                <img src={catalog3} alt=''/>
                <img src={catalog4} alt=''/>
                <img src={catalog5} alt=''/>
                <img src={catalog6} alt=''/>
                <img src={catalog7} alt=''/>
                <img src={catalog8} alt=''/>
                <img src={catalog9} alt=''/>
            </div>
        </section>
    )
};

export default Catalog;