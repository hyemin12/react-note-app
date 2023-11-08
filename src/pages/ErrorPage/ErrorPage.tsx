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
        <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
        <div>
          <p>
            입력한 주소가 잘못되었거나, 사용이 일시 중단되어 요청하신 페이지를
            찾을 수 없습니다.
          </p>
          <p>서비스 이용에 불편을 드려 죄송합니다.</p>
        </div>

        <ButtonFill onClick={moveToMainPage}>메인페이지로 돌아가기</ButtonFill>
      </div>
    </Container>
  );
};

export default ErrorPage;
