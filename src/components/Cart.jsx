import React from 'react'
import useGoTo from '../hooks/useGoTo';

const Cart = () => {
  const goTo = useGoTo();
  return (
    <div>
      <b>박스 컴포넌트입니다</b>
      <div>
        <button onClick={goTo.goToHome}>메인</button>
      </div>
    </div>
  )
}

export default Cart