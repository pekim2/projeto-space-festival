import styles from '../../components/newsletter/styles.css'

function Newsletter () {
return (
    <section className='container-box'>
        <form className='form-box'>
            <h5>Receba promoções exclusivas!</h5>
            <input required type="email" placeholder='E-mail'/>
            <button type="submit">Enviar</button>
        </form>
    </section>
    );
}

export default Newsletter