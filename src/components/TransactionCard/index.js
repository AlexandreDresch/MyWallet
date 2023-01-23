import {
  Container,
  InnerContainer,
  DateText,
  DescriptionText,
  ValueText,
} from "./styles";

export function TransactionCard({ date, description, value, type }) {
  return (
    <Container>
      <InnerContainer>
        <DateText>{date}</DateText>

        <DescriptionText data-test={"registry-name"}>{description}</DescriptionText>
      </InnerContainer>
      <ValueText data-test={"registry-amount"} type={type}>{value.toFixed(2).toString().replace(".", ",")}</ValueText>
    </Container>
  );
}
