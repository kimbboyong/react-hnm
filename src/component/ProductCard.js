import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

    const navigate = useNavigate();

    const showDetail = () => {
        navigate(`/product/${item.id}`);
    }

    return (
        <div>
            <div className='card_wrap'>
                <ul>
                    <li onClick={showDetail}>
                        <figure>
                            <img src={item?.img} />
                        </figure>
                        <div className='txt_area'>
                            <span>Conscious choice</span>
                            <p>{item?.title}</p>
                            <strong>￦{item?.price} </strong>
                            <em>{item?.new === true ? "신제품" : ""} </em>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductCard