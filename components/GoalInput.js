import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [enteredGoalsText, setEnteredGoalsText] = React.useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalsText(enteredText);
  }

  function addGoalsHandler() {
    props.onAddGoal(enteredGoalsText);
    setEnteredGoalsText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="enter your goals here"
        onChangeText={goalInputHandler}
      />
      <Button title="Add goal" onPress={addGoalsHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
