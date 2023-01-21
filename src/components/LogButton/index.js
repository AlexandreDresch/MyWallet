import { ThreeDots } from "react-loader-spinner";

import { Container, Text } from "./styles";

export function LogButton({ text, disabled }) {
  return (
    <Container type="submit" disabled={disabled}>
      {disabled ? (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Text>{text}</Text>
      )}
    </Container>
  );
}