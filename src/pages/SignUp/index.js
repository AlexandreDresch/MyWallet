import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/Input";
import { LogButton } from "../../components/LogButton";

import { api } from "../../services/api";

import MyWalletLogo from "../../assets/MyWallet.png";

import { Container, LogoImage, FormContainer, Text } from "./styles";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
        await api.post("/sign-up", {
            username,
            email,
            password,
            repeat_password: repeatPassword,
        });

        navigate("/");
    } catch (error) {
      alert("Erro ao cadastrar usuário, tente novamente");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <LogoImage src={MyWalletLogo} />

      <FormContainer onSubmit={handleSignUp}>
        <Input
          placeholder={"Nome"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          type={"text"}
        />

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

        <Input
          placeholder={"Confirme a senha"}
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          disabled={isLoading}
          type={"password"}
        />

        <LogButton text={"Cadastrar"} disabled={isLoading} />
      </FormContainer>

      <Link to={"/"} data-test="login-link">
        <Text>Já tem uma conta? Entre agora!</Text>
      </Link>
    </Container>
  );
}
