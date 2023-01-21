import { Container } from "./styles";

export function Input({
  placeholder,
  onChange,
  value,
  disabled,
  type,
}) {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
      type={type}
    />
  );
}