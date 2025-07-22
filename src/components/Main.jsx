import React from 'react';
import useGoTo from '../hooks/useGoTo';

const Main = () => {
    const { goToCart } = useGoTo();

    return (
        <div>
            <b>메인 컴포넌트입니다</b>
            <div>
                <button onClick={goToCart}>장바구니</button>
            </div>
        </div>
    )
};

export default Main;
