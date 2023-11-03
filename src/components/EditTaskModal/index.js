import { Image, TouchableOpacity } from "react-native";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import TaskForm from "../TaskForm";
import { Header } from "./styles";

import close from "../../assets/images/close.png";

export default function EditTaskModal({ visible, onClose, onSave, task }) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
    >
      <Header>
        <Text weight={600}>Alterar Tarefa</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <TaskForm
        buttonLabel="Alterar"
        onSave={onSave}
        task={task}
      />
    </CustomModal>
  );
}