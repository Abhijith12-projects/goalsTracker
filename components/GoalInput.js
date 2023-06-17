import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalsText, setEnteredGoalsText] = React.useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalsText(enteredText);
  }

  function addGoalsHandler() {
    if (enteredGoalsText.trim().length === 0) return;
    props.onAddGoal(enteredGoalsText);
    setEnteredGoalsText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/final.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="enter your goals here"
          onChangeText={goalInputHandler}
          value={enteredGoalsText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              title="Add goal"
              onPress={addGoalsHandler}
              color={"#5e0acc"}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="Cancel"
              onPress={props.onEndModal}
              color={"#f31282"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#311b6b",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
  },
  buttonContainer: {
    marginTop: 16,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  buttons: {
    margin: 4,
    padding: 2,
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 12,
  },
});
