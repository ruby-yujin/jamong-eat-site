import styled from "styled-components";

function Visual() {
  return (
    <VisualWrap>
      <Dim />
      <img src="assets/img/main/visual_07.png" alt="img" />
      <VisualTitle>
        <h1>
          솔직한 리뷰, 믿을 수 있는 평점! <br />
          내돈내산 자몽맛집
        </h1>
      </VisualTitle>
    </VisualWrap>
  );
}

const VisualWrap = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
`;
const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const VisualTitle = styled.div`
  position: relative;
  z-index: 4;
  h1 {
    font-size: 2.2rem;
    color: #fff;
    text-align: center;
    line-height: 3rem;
  }
`;
export default Visual;
