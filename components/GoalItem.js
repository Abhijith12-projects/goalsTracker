import { StyleSheet, View, Text } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "black",
    padding: 8,
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
