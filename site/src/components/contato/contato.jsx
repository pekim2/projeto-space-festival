import styles from '../contato/styles.css'
import Jose from '../../assets/profiles/jose.jpeg'
import Pekim from '../../assets/profiles/pekim.jpeg'
import Amanda from '../../assets/profiles/amanda.jpeg'
import Thiago from '../../assets/profiles/thiago.jpeg'
import Kaua from '../../assets/profiles/kaua.jpeg'
import Maria from '../../assets/profiles/maria.jpeg'
// import jose from '../../assets/unnamed.png'
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'


function Contato () {
    return (
<section className='container-contato'>
            <div className='header-contato'>
                <h3 className='title-contato'>Organizadores</h3>
                <p>Entre em contato conosco</p>
            </div>
        <div className='box-contato'>
            <div className='contato-1'>
                    <h4>Amanda Girelli</h4>
            <img src={Amanda}/>
            <div className='react-icons'>
                <GrLinkedin />
                <GrGithub />
            </div>
            </div>
                
            <div className='contato-2'>
                    <h4>Gabriel Pekim</h4>
            <img src={Pekim}/>
            <div className='react-icons'>
                <GrLinkedin />
                <GrGithub />
            </div>
            </div>

            <div className='contato-3'>
                    <h4>José Gabriel</h4>
            <img src={Jose}/>
            <div className='react-icons'>
                <GrLinkedin />
                <GrGithub />
            </div>
            </div>

            <div className='contato-4'>
                <h4>Kauã Soares</h4>
            <img src={Kaua}/>
            <div className='react-icons'>
                <GrLinkedin />
                <GrGithub />
            </div>
            </div>

            <div className='contato-5'>
                <h4>Maria Lima</h4>
                <img src={Maria}/>
                <div className='react-icons'>
                <GrLinkedin />
                <GrGithub />
            </div>
            </div>
            
            <div className='contato-6'>
                <h4>Thiago Pereira</h4>
                <img src={Thiago}/>
                <div className='react-icons'>
                <GrLinkedin />
                <GrGithub />
            </div>
            </div>
        </div>
        </section>
    )
}

export default Contato;