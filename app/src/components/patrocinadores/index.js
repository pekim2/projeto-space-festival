import styles from './styles.css'
import prefeitura from '../../img/patrocinadores/prefeitura.png' 
import senac from '../../img/patrocinadores/senac.png' 
import resilia from '../../img/patrocinadores/resilia.png' 

function Patrocinadores () {
    return (
        <section className='container box-patrocinadores'>
            <h2>Patrocinadores</h2>
        <div className='patrocinadores'>
        <div className='pat-1'>
            <img src={resilia} alt={'logo da resilia'}/>
        </div>
        <div className='pat-2'>
            <img src={senac} alt={'logo do senac'}/>
        </div>
        <div className='pat-3'>
            <img src={prefeitura} alt={'logo da prefeitura do Rio'}/>
        </div>
        </div>
        </section>
    );
}

export default Patrocinadores