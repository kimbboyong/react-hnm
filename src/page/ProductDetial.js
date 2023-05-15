import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetial = () => {

    let { id } = useParams();

    const [product, setProduct] = useState(null);

    const [selectedSize, setSelectedSize] = useState(''); // 선택된 사이즈의 상태

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/kimbboyong/react-hnm/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <Container>
            <Row>
                <Col className='product_img'>
                    <img src={product?.img} />
                </Col>
                <Col className='product_wrap'>
                    <div className='product_inner'>
                        <div className='product_title'>
                            <strong>
                                {product?.title}
                            </strong>
                        </div>
                        <div class="product_price">
                            <strong>
                                ￦{product?.price}
                            </strong>
                        </div>
                    </div>

                    <Dropdown className="drop-down">
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            {selectedSize ? selectedSize : '사이즈 선택'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {product?.size.length > 0 &&
                                product.size.map((item) => (
                                    <Dropdown.Item key={item} onClick={() => handleSizeSelect(item)}>
                                        {item}
                                    </Dropdown.Item>
                                ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className="add_button">
                        추가
                    </Button>


                </Col>
            </Row>
        </Container >
    )
}

export default ProductDetial