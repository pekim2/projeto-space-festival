import Container from 'react-bootstrap/Container'
import Content from '../components/banner/index'
import Contador from '../components/contador/index'
import Patrocinadores from '../components/patrocinadores/index'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Rodape'
import Ingresso from '../components/ingresso/ingresso'

function Home() {
    return (
        <>
            <section className='fixed-background'>
                <Navbar />
                <Content />
                <Contador />
                <Ingresso />
                <Patrocinadores />
                <Footer />
            </section>
        </>
    );
}

export default Home;