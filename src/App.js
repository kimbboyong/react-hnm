import { useEffect, useState } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom'

import ProductAll from './page/ProductAll';
import Login from './page/Login';

import Navbar from './component/Navbar';
import PrivateRoutes from './routes/PrivateRoutes';


// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1 네이게이션 바
// 2. 전체 상품에서는 전체 상품 볼수있음
// 3. 로그인버튼을 누르면 로그인 페이지가 나옴
// 4. 상품디테일을 눌렀을때 로그인이 안되어있을 경우에는 로그인 페이지로 이동됨
// 5. 로그인이 되어있을 경우 상품디테일 페이지로 이동
// 6. 상품디테일페이지에서 로그아웃을 했을경우 다시 로그인 페이지가 된다
// 7. 상품을 검색할수있따

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate])


  return (
    <div className='container'>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />

      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<PrivateRoutes authenticate={authenticate} />} />
      </Routes>

    </div>
  );
}

export default App;
