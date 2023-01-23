import { Container, Image, Text } from "./styles";

import PlusImage from "../../assets/plus-circle.svg";
import MinusImage from "../../assets/minus-circle.svg";
import { Link } from "react-router-dom";

export function TransactionButton({ deposit, to, dataTest }) {
  return (
    <Link to={to}>
      <Container data-test={dataTest}>
        {deposit === true ? (
          <Image src={PlusImage} />
        ) : (
          <Image src={MinusImage} />
        )}

        {deposit === true ? <Text>Nova entrada</Text> : <Text>Nova saída</Text>}
      </Container>
    </Link>
  );
}
