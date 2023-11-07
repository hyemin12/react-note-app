import { useNavigate } from "react-router-dom";
import ErrorImage from "@/assets/img/HTML-404-Page.png";
import { Container } from "./ErrorPage.styles";
import { ButtonFill } from "@/styles/styles";

const ErrorPage = () => {
  const navigate = useNavigate();

  const moveToMainPage = () => {
    navigate("/");
  };
  return (
    <Container>
      <div className="error__img">
        <img src={ErrorImage} alt="page not found" />
      </div>
      <div className="error__text">
        <h1>404</h1>
        <p>에러가 발견되었습니다</p>
        <ButtonFill onClick={moveToMainPage}>메인페이지로 돌아가기</ButtonFill>
      </div>
    </Container>
  );
};

export default ErrorPage;
