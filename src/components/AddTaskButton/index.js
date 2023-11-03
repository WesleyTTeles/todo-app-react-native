import { Add, Container } from './styles';
import { Text } from '../Text';

export default function AddTaskButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Add>
        <Text size={40} color="#FFFFFF">+</Text>
      </Add>
    </Container>
  );
}