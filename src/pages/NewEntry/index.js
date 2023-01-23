import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { FormButton } from "../../components/FormButton";

import { api } from "../../services/api";

import { UserContext } from "../../context/userContext";

import { Container, HeaderText, FormContainer } from "./styles";

export function NewEntry() {
  const [value, setValue] = useState();
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { userData } = useContext(UserContext);

  async function handleNewEntry(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post(
        "/new-transaction",
        {
            value: +value,
            description,
            type: "entry",
          },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
        
      );

      navigate("/home");
    } catch (error) {
      alert("Erro ao cadastrar entrada, tente novamente");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <HeaderText>Nova entrada</HeaderText>

      <FormContainer onSubmit={handleNewEntry}>
        <Input
          placeholder={"Valor"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={isLoading}
          type={"number"}
          dataTest={"registry-amount-input"}
        />

        <Input
          placeholder={"Descrição"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isLoading}
          type={"text"}
          dataTest={"registry-name-input"}
        />

        <FormButton text={"Salvar entrada"} disabled={isLoading} dataTest={"registry-save"}/>
      </FormContainer>
    </Container>
  );
}
