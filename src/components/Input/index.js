import { Container } from "./styles";

export function Input({
  placeholder,
  onChange,
  value,
  disabled,
  type,
  dataTest
}) {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
      type={type}
      data-test={dataTest}
    />
  );
}