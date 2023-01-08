import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <h1>개발자를 소개하는 페이지입니다</h1>
      <ul>
        <li>
          <Link to="/developer/developer">Main 개발자의 프로필</Link>
        </li>
        <li>
          <Link to="/developer/c201">C201의 정보</Link>
        </li>
        <li>
          <Link to="/developer/void">존재하지 않는 프로필</Link>
        </li>
      </ul>
    </>
  );
};

export default AboutMe;