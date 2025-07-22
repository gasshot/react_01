// hooks/useGoTo.js
import { useNavigate } from 'react-router-dom';

const useGoTo = () => {
  const navigate = useNavigate();

  return {
    goToHome: () => {
        console.log("메인 버튼이 클릭되었습니다");
        navigate('/')},
    goToCart: () => {
        console.log("🛒 장바구니 버튼이 클릭되었습니다");
        navigate('/cart')
    },
    goBack: () => navigate(-1),
  };
};

export default useGoTo;