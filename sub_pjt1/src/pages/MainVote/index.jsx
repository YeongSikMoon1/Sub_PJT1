import { Link } from "react-router-dom";


const MainVote = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <div><Link to='/aboutme'>개발자 소개</Link></div>
      <div><Link to='/contacts'>연락처</Link> </div>
      <div><Link to='/terms'>개인정보 처리약관</Link> </div>
    </div>
  );
};

export default MainVote;