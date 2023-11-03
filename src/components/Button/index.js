import { Text } from "../Text";
import { Container } from "./styles";

export default function Button({ children, onPress, disabled, primary = true }) {
  return (
    <Container disabled={disabled} primary={primary} onPress={onPress}>
      <Text color={primary ? '#FFFFFF' : '#333'}>{children}</Text>
    </Container>
  );
}