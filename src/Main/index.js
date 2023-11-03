import {
  CenteredContainer,
  Container,
  TaksIcon,
  TaskEmptyContainer,
  TasksContainer,
} from "./styles";

import { tasks as mock } from "../mocks/tasks";

import Header from "../components/Header";
import Tasks from "../components/Tasks";
import AddTaskButton from "../components/AddTaskButton";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { useState } from "react";
import NewTaskModal from "../components/NewTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import { ActivityIndicator } from "react-native";
import { Text } from "../components/Text";

import taksicon from "../assets/images/task.png";

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdit, setTaskBeingEdit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTaks] = useState([]); // Estado inicial

  function handleChangeSatusTask() {
    alert("Alterar Status Tarefa");
  }

  function handleEditTask(task) {
    setTaskBeingEdit(task);
    setIsEditTaskModalVisible(true);
  }

  function handleConfirmDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleDeleteTask() {
    //Requisição Delete
    setIsDeleteModalVisible(false);
  }

  function handleCreateTask(task) {
    //Requisição de cadastro de tarefa
    setIsNewTaskModalVisible(false);
  }

  function handleSaveEditTaks() {
    //Requisição de alteração de tarefa
    setIsEditTaskModalVisible(false);
  }

  return (
    <Container>
      <Header />

      {!isLoading && (
        <TasksContainer>
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onChangeStatusTask={handleChangeSatusTask}
              onConfirmDeleteTask={handleConfirmDeleteTask}
              onEditTask={handleEditTask}
            />
          ) : (
            <TaskEmptyContainer>
              <TaksIcon source={taksicon} />
              <Text size={20} opacity={0.8} weight="600">
                Sem Tarefas
              </Text>
              <Text>Nao ha tarefas a serem exibidas</Text>
            </TaskEmptyContainer>
          )}
        </TasksContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator color="#666" size="large" />
        </CenteredContainer>
      )}

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        onClose={() => setIsDeleteModalVisible(false)}
        visible={isDeleteModalVisible}
        onConfirm={handleDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleSaveEditTaks}
        task={taskBeingEdit}
      />
    </Container>
  );
}
