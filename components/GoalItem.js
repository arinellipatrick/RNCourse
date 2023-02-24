import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ data, onDeleteItem, id }) {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={onDeleteItem.bind(this, id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{data}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
