import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";

import { UserContext } from "../../context/userContext";

import { api } from "../../services/api";

import LogOutSvg from "../../assets/log-out.svg";
import { TransactionButton } from "../../components/TransactionButton";
import { TransactionCard } from "../../components/TransactionCard";

import {
  Container,
  HeadersContainer,
  HeaderText,
  LogOutButton,
  ContentContainer,
  Text,
  ButtonsContainer,
  FooterContentContainer,
  BalanceTitle,
  BalanceDetails,
} from "./styles";
import { Link } from "react-router-dom";

export function Home() {
  let data = [
    { date: "30/11", description: "Almoço mãe", value: 31.9, type: "withdraw" },
    { date: "30/11", description: "Almoço mãe", value: 32.9, type: "withdraw" },
    { date: "30/11", description: "Almoço mãe", value: 33.9, type: "entry" },
    { date: "30/11", description: "Almoço mãe", value: 34.9, type: "withdraw" },
    { date: "30/11", description: "Almoço mãe", value: 35.9, type: "entry" },
  ];

  const [wallet, setWallet] = useState([]);
  const [finalBalance, setFinalBalance] = useState(0);
  const [isPositive, setIsPositive] = useState(true);

  const { userData } = useContext(UserContext);

  async function getBalance() {
    try {
      const userBalance = await api.get("/wallet", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });

      setWallet(userBalance.data);
      getFinalBalance(userBalance.data);
    } catch (error) {
      console.log(error);
    }
  }

  function getFinalBalance(balance) {
    let entries = [];
    let withdraws = [];

    balance.filter((transaction) => {
      if (transaction.type === "entry") {
        return entries.push(transaction.value);
      } else {
        return withdraws.push(transaction.value);
      }
    });

    let finalEntry = entries.reduce((a, b) => a + b, 0);
    let finalWithdraw = withdraws.reduce((a, b) => a + b, 0);

    if (finalEntry > finalWithdraw || finalEntry === finalWithdraw) {
      setIsPositive(true);
      setFinalBalance(finalEntry - finalWithdraw);
    } else {
      setIsPositive(false);
      setFinalBalance(finalWithdraw - finalEntry);
    }
  }

  useEffect(() => {
    getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <HeadersContainer>
        <HeaderText data-test={"user-name"}>Olá, {userData.name}</HeaderText>

        <Link to={"/"}>
          <LogOutButton src={LogOutSvg} data-test={"logout"} />
        </Link>
      </HeadersContainer>

      <ContentContainer>
        {wallet.length === 0 && (
          <Text>
            Não há registros de{"\n"}
            entrada ou saída
          </Text>
        )}

        {wallet.length > 0 &&
          wallet.map((transaction, index) => (
            <TransactionCard
              key={index + transaction.date}
              date={transaction.date}
              description={transaction.description}
              value={transaction.value}
              type={transaction.type}
            />
          ))}

        {wallet.length > 0 && (
          <FooterContentContainer>
            <BalanceTitle>SALDO</BalanceTitle>

            <BalanceDetails isPositive={isPositive} data-test={"total-amount"}>
              {finalBalance.toFixed(2).toString().replace(".", ",")}
            </BalanceDetails>
          </FooterContentContainer>
        )}
      </ContentContainer>

      <ButtonsContainer>
        <TransactionButton deposit to={"/nova-entrada"} dataTest={"new-income"}/>

        <TransactionButton deposit={false} to={"/nova-saida"} dataTest={"new-expense"} />
      </ButtonsContainer>
    </Container>
  );
}
