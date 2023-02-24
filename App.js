import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [goalsText, setGoalsText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoalsText(enteredText);
  };

  const addGoalHandler = (data) => {
    setGoals(() => [...goals, goalsText]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    const newList = goals.filter((goal) => goal.id !== id);
    setGoals(newList);
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && (
        <GoalInput
          visible={modalIsVisible}
          inputHandler={goalInputHandler}
          goalHandler={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                data={itemData.item}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
