import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Rodape'
import Contato from '../components/contato/contato'

function ContatoApp() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <section className='contato-pag'>
        <Navbar />
        <Contato />
        <Footer />
        </section>
    )
}

export default ContatoApp;