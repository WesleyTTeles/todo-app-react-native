import { Container, TasksConatainer } from "./styles";
import Header from "../components/Header";
import { Tasks } from "../components/Tasks";

import { tasks } from "../mocks/tasks";
import { FlatList } from "react-native";

export default function Main() {
  return (
    <Container>
      <Header />
      <TasksConatainer>
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Tasks tasks={item} />}
        />
      </TasksConatainer>
    </Container>
  );
}
