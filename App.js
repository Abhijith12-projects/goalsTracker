import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = React.useState([]);

  function addGoalsHandler(enteredGoalsText) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalsText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalsHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
