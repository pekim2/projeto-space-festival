import { useEffect, useState } from 'react'
import Infos from '../components/sobre/index'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Rodape'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <section className='sobre-pag'>
            <Navbar />
            <Infos />
            <Footer />
        </section>
    );
}

export default Sobre