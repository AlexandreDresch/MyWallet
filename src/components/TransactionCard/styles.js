import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const DateText = styled.p`
  font-size: 16px;
  font-family: "Raleway";
  color: #c6c6c6;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  font-family: "Raleway";
`;

export const ValueText = styled.p`
  font-size: 16px;
  font-family: "Raleway";
  color: ${(props) => (props.type === "entry" ? "#03AC00" : "#C70000")};
`;
