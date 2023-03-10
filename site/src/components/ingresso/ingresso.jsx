import Container from "react-bootstrap/esm/Container"
import qrcode from '../../assets/qrcode.png'
import './styles.css'

function ingresso() {
    return (
        <Container className="container-ingresso">
            <img src={qrcode} alt="QRCODE do Aplicativo"/>
            <h5><a href="http://localhost:3000/">Baixe nosso App e tenha 10% de desconto na compra dos seus ingressos </a></h5>
        </Container>
    )
}

export default ingresso