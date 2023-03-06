import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle.Styled";
import MainCommonLayout from "./main/common/MainCommonLayout";
import Router from "./main/routers/Router";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainCommonLayout />
      <Router />
    </BrowserRouter>
  );
}

export default App;
