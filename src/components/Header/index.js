import { Container } from "./styles";
import { Text } from '../Text.js'

export default function Header() {
    return(
        <Container>
            <Text size={24}>
                ToDo
                <Text size={24} weight="700">
                    App
                </Text>
            </Text>
            <Text opacity={0.5}>
                Add, delete ou marque as tarefas executadas.
            </Text>
        </Container>
    );
}