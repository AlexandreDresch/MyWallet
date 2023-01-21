import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { Input } from "../../components/Input";
import { LogButton } from "../../components/LogButton";

import { api } from "../../services/api";

import { UserContext } from "../../context/userContext";

import { Container, LogoImage, FormContainer, Text } from "./styles";

import MyWalletLogo from "../../assets/MyWallet.png";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  async function handleSignIn(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userData = await api.post("/sign-in", {
        email,
        password,
      });

      setUserData({
        name: userData.data.username,
        token: userData.data.token,
      });

      navigate("/home");
    } catch (error) {
      alert("Erro ao efetuar login, tente novamente");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <LogoImage src={MyWalletLogo} />

      <FormContainer onSubmit={handleSignIn}>
        <Input
          placeholder={"E-mail"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          type={"email"}
        />

        <Input
          placeholder={"Senha"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          type={"password"}
        />

        <LogButton text={"Entrar"} disabled={isLoading} />
      </FormContainer>

      <Link to={"/sign-up"}>
        <Text>Primeira vez? Cadastre-se!</Text>
      </Link>
    </Container>
  );
}
