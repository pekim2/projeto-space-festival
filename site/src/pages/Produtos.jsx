import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Rodape'

import styles from '../components/produtos/styles.css'

import React, { useEffect, useState } from "react";
import Axios from "axios";

function Produtos() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3344/produtos").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  return (
    <section className='container-produtos'>
      <Navbar />

      <div className='container-items' id='camiseta'>
        {produtos.map((produto) => (
          <div>
            <Card className='card-produtos' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={produto.imagem} />
            <Card.Body>
              <Card.Title>{produto.titulo}</Card.Title>
              <Card.Text>
                {produto.descricao}
              </Card.Text>
              <Button className='button-buy'>R$ {produto.valor}</Button>
            </Card.Body>
          </Card>
          </div>
          
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Produtos