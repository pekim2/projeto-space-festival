import styles from './styles.css'
import Container from 'react-bootstrap/esm/Container';
import astronauta1 from '../../assets/astronautas/astronauta-lua.png'
import astronauta2 from '../../assets/astronautas/astronauta-nave.png'

function Infos () {
    return (
        <Container >
        <section className='sobre'>
            <h1> Nosso Festival! </h1>
        <div className='box-3'>
            <div className='apresentacao-1'>
                <img src={astronauta1} />
            </div>
            <p>
            &nbsp; O Space Festival é o principal festival de música do planeta!
            
            <br />
            <br />

            &nbsp; O significado do nome vem da origem de quando os jovens ouvem músicas, podem levar à lugares imagináveis e incríveis sem sair do lugar. 
            
            <br />
            <br />

            &nbsp; Criado em 2023 por cinco jovens direto de Campo Grande - Rio de Janeiro, Brasil, é esperado que o festival receba mais de 500 mil pessoas em três dias de muitos shows e apresentações incríveis na Cidade do Festival.

            <br />
            <br />

            &nbsp; Já temos a data do nosso primeiro encontro: Nos dias 01, 02 e 03 de dezembro.
            </p>
        </div>
            <br />
            <h1>Acessibilidade</h1>
        <div className='box-4'>
        <div className='apresentacao-2'>
                <img src={astronauta2} />
            </div>
            <p>
            &nbsp; Alguns shows contarão com tradução simultânea em libras, a língua brasileira dos sinais.

            <br />
            <br />

            &nbsp; Além do que os artistas irão interagir com o público, os intérpretes serão responsáveis por traduzir as letras das músicas. 
            
            <br />
            <br />

            &nbsp; Também teremos a inauguração do Chef Stage, uma área que contará com 15 stands de comidas diferentes, e opções de mais de 30 pratos de massas, paellas, risotos entre outros. 
            </p>
        </div>
        </section>
        </Container>
    );
}

export default Infos