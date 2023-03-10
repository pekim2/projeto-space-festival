import styles from '../../components/patrocinadores/styles.css'
import Container from 'react-bootstrap/Container';
import prefeitura from '../../assets/prefeitura.png' 
import senac from '../../assets/senac.png' 
import resilia from '../../assets/resilia.png' 

function Patrocinadores () {
    return (
        <section className='box-patrocinadores'>
            <h3>Conheça nossos patrocinadores!</h3>
        <div className='patrocinadores'>
        <div className='pat-1'>
            <img src={resilia}/>
        </div>
        <div className='pat-2'>
            <img src={senac}/>
        </div>
        <div className='pat-3'>
            <img src={prefeitura}/>
        </div>
        </div>
        </section>
    );
}

export default Patrocinadores