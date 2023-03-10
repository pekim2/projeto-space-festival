import styles from './styles.css'
import Title from './Title'
import Counter from './Counter'
import useCountdown from "../../hooks/useCountdown"
import earth from '../../assets/earth.jpg'

import teste from '../../assets/astronautas/astronauta-foguete.png'
import teste1 from '../../assets/astronautas/astronauta-paz.png'

function Contador() {
    const [day, hour, minute, second] = useCountdown("December 1, 2023 15:30:00:00")
    return (
    <section className="world-background">
        <div> <img src={teste}/> </div>
        <div className='Contador'>
            <div className='world loader' style={{ backgroundImage:`url(${earth})` }}>
            </div>
            <div className="container-counter">
                <Title title="Para decolagem!"/>
                <div className='countdown-container'>
                    <Counter title="Dias" number={day}/>
                    <Counter title="Horas" number={hour}/>
                    <Counter title="Min" number={minute}/>
                    <Counter title="Seg" number={second}/>
                </div>
            </div>
        </div>
        <div className='world-background'> <img src={teste1}/> </div>
    </section>
    )
}
export default Contador;