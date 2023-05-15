import { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../src_assets/logo.png';

const Navbar = ({ authenticate, setAuthenticate }) => {


    const navigate = useNavigate();

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const goToLogin = () => {
        navigate('./login');
    }

    const search = (event) => {
        if (event.key === "Enter") {
            if (event.target.value === "") {
                alert('검색어를 입력해주세요.');
                return;
            }
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }

    const goHome = () => {
        navigate('/');
    }

    let [width, setWidth] = useState(0);

    return (
        <div>


            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>

            <div className='header'>
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>

                {authenticate ? (
                    <div className='login_btn' onClick={() => setAuthenticate(false)}>
                        <div>
                            <span>로그아웃</span>
                        </div>
                    </div>
                ) : (
                    <div className='login_btn' onClick={goToLogin}>
                        <div>
                            <span>로그인</span>
                        </div>
                    </div>
                )
                }
                <div className='logo'>
                    <figure>
                        <img src={logo} alt="Logo" onClick={goHome} />
                    </figure>
                </div>

                <div className='menu hide'>
                    <ul>
                        {menuList.map((menu, index) => (
                            <li key={index} > {menu} </li>
                        ))}
                    </ul>
                </div>

                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;