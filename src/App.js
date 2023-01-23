import styled from "styled-components";
import { UserProvider } from "./context/userContext";

import { GlobalStyle } from "./global/styles";

import Routes from "./routes/routes";

export default function App() {
  return (
    <Container>
      <UserProvider>
        <GlobalStyle />
        <Routes />
      </UserProvider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #8C11BE;
  height: 100vh;
`;
