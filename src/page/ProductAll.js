import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard'
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get('q') || "";
        console.log('searchQuery?', searchQuery);
        let url = `http://localhost:4000/products?q=${searchQuery}`;
        let reponse = await fetch(url);
        let data = await reponse.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu, index) => (
                        <Col key={index} lg={3}><ProductCard item={menu} /></Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll