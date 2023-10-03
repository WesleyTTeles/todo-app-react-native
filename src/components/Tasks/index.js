import { TouchableOpacity } from "react-native";

import {
  Task,
  TaskAction,
  TaskDescription,
  TaskFooter,
  TaskHeader,
  TaskIcon,
  TaskStatus,
} from "./styles";

import { Text } from "../Text.js";

import pending from "../../assets/images/pending.png";
import done from "../../assets/images/done.png";
import edit from "../../assets/images/edit.png";
import delet from "../../assets/images/delete.png";

export function Tasks({ tasks }) {
  return (
    <Task>
      <TaskHeader>
        <Text size={18} weight="600">
          {tasks.title}
        </Text>
      </TaskHeader>
      <TaskDescription>
        <Text opacity={0.5}>{tasks.description}</Text>
      </TaskDescription>
      <TaskFooter>
        <TaskStatus
          onPress={() => {
            alert("Tarefa alterada");
          }}
        >
          <TaskIcon source={tasks.done === false ? pending : done} />
          <Text
            {...(tasks.done === false
              ? { color: "#E620A2" }
              : { color: "#8DB7E9" })}
          >
            {tasks.done === false ? "Pendente" : "Concluida"}
          </Text>
        </TaskStatus>
        <TaskAction>
          <TouchableOpacity
            onPress={() => {
              alert("Tarefa Editada");
            }}
          >
            <TaskIcon source={edit} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("Tarefa Deletada");
            }}
          >
            <TaskIcon source={delet} />
          </TouchableOpacity>
        </TaskAction>
      </TaskFooter>
    </Task>
  );
}
