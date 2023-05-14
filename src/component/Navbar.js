import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../src_assets/logo.png';

const Navbar = (authenticate) => {


    const navigate = useNavigate();

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const goToLogon = () => {
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


    return (
        <div>

            <div className='header'>
                <div className='login_btn' onClick={goToLogon}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                        <span>로그인</span>
                    </div>
                </div>
                <div className='logo'>
                    <figure>
                        <img src={logo} alt="Logo" onClick={goHome} />
                    </figure>
                </div>

                <div className='menu'>
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