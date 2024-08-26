import './App.css';
import {Routes,Route} from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import MyPage from './pages/MyPage';
import Product from './pages/Product';
import { Link } from 'react-router-dom'
import NotFound from './pages/NotFound';
function App() {
  /*1. npm i react-router-dom 설치
    2. index.js로 이동해서 app을 BrowserRouter로 감싸기 (필수!)
    - TypeError : Cannot read properties of undefined(reading 'pathname')
    ->Browser Router 감싸지 않았거나 , 라우팅 잘못한경우 생기는 오류
    ->HTML5의 HistoryAPI를 사용하여 URL과  UI를 동기화 해주는 Router

    3. 페이지 만들기
    -페이지 역할을 해줄 컴포넌트
    -컴포넌트를 요청할 조건 path (Routes,Route)
    -Routes : 여러 Route들을 감싸서 그 중 사용자 요청 조건에 맞는 라우트 하나만 렌더링 해준다(과거 switch 문법)
    -Route : 여러경로
        -필수 속성2가지 path, element
        -path (경로 ) : 사용자가 이렇게요청했을때~
        -element (컴포넌트): 어떤 컴포넌트를 보여줄게
         
        링크 : 클릭시 바로 이동해야하는 로직 구현
        네비게이트 : 페이지 전환시 추가 로직 필요시
         ex:로그인 됐다면 마이페이지 안됐다면 로그인페이지 
  */ 
       

  return (
    
    <div>
      {/* Routes 바깥에 있는 요소들은 라우트 처리와 관계 없이 고정
      - 상단바,하단바 등등 고정되어있어야하는 요소들은 Routes 바깥에 위치
      */}
      <Link to ='/'>
      <h1>React-Router-Dom</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        {/* useParams 사용
        -path 작성 + : 변수명 */}
        <Route path='/product/:num' element={<Product/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>



    </div>
  );
}

export default App;
