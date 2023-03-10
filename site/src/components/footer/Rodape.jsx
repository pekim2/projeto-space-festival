import Container from 'react-bootstrap/Container';
import styles from './styles.css'
import '../newsletter/'
import Newsletter from '../newsletter/';

function Rodape() {
    return (
        <Container fluid className='pt-5'>
            <section className='footer'>
                <div className='box-1'>
                <ul> <strong>Festival</strong>
                    <li>Parceiros</li>
                    <li>Imprensa</li>
                </ul>
                <ul> <strong> Ajuda </strong>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
                <ul> <strong>Social</strong>
                    <li> Youtube</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>TikTok</li>
                    <li>Twitter</li>
                </ul>
            <Newsletter />
                </div>
            <div className='box-2'>
                    <p>&copy; Space</p>
                    <p>Privacidade</p>
                    <p>Termos & Condições</p>
            </div>
            </section>
        </Container>
    );
}

export default Rodape