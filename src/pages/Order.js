import { Link } from 'react-router-dom';
import './Order.css';

const Order=()=>{
    return(
        <section className="order-section">
            <h2 className='section-title'>Cara <span>Pemesanan</span></h2>
            <br/>
            <p>Pesan paket website kami sekarang untuk mendapatkan penawaran spesial dan mulai membangun website untuk kesuksesan bisnis Anda.</p>
            <div className='order-step'>
                <h3>Pilih Template</h3>
                <p>Pilih template seuai kebutuhan Anda, jika ingin membuat website toko online maka pilih <Link to="/catalog"><span>template</span></Link> toko online yang anda inginkan. </p>
            </div>
            <div className='order-step'>
                <h3>Pilih Paket</h3>
                <p>Klik <a href='https://wa.me/6288212108170' target='_blank' rel="noopener noreferrer"><span>pesan sekarang</span></a> pada paket website yang diinginkan. Kemudian Anda akan menuju ke halaman member. Isi nama domain yang diinginkan, klik lanjutkan, Anda akan diminta mengisi template yang tadi sudah dipilih, isikan nama template tersebut. </p>
            </div>
            <div className='order-step'>
                <h3>Pembayaran</h3>
                <p>Silahkan bayar invoice tersebut, konfirmasikan <span>bukti transfer</span> melalui WhatsApp.</p>
            </div>
            <p>Note : Website akan kami aktifkan paling lambat 24 jam, tergantung kecepatan index domain ke server kami.</p>
            <br/>
            <h2 className='lastword'>Segera pesan paket website kami dan tingkatkan kualitas bisnis Anda!</h2>
        </section>
    )
};

export default Order;