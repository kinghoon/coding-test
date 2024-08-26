import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
  return (
    <div>MyPage
      <hr/>
      <h3>내가쓴글</h3>
      <div>
        <Link to="/product/1"><p>
          [1]캠핑용품거래하실분
          </p></Link>
        <Link to="/product/2?best=true&&new=true"><p>
          [2]정보처리기사 스터디 하실분</p></Link>
        <Link to="/product/3"><p>
          [3]이 공모전 괜찮나요?</p></Link>
      
      </div>





    </div>
  )
}

export default MyPage