import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 22px;
`;

export const HeaderText = styled.h1`
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Raleway";
`;

export const LogOutButton = styled.img`
  width: 24px;
`;

export const ContentContainer = styled.div`
  width: 326px;
  height: 446px;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Text = styled.p`
  width: 180px;
  margin-top: 200px;
  margin-left: 73px;
  font-size: 20px;
  font-family: "Raleway";
  color: #868686;
`;

export const ButtonsContainer = styled.div`
  margin-top: 13px;
  display: flex;
  gap: 15px;
`;

export const FooterContentContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const BalanceTitle = styled.p`
  font-weight: 700;
  font-size: 17px;
  font-family: "Raleway";
`;

export const BalanceDetails = styled.p`
  font-weight: 400;
  font-size: 17px;
  font-family: "Raleway";
  color: ${(props) => (props.isPositive ? "#03AC00" : "#C70000")};
`;
