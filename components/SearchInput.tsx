import { StyleSheet, TextInput } from "react-native";

type SearchInputTypes = {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}

export default function SearchInput({ value, onChange, onSubmit }: SearchInputTypes) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder="Search..."
      keyboardType="web-search"
      onSubmitEditing={onSubmit}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderRadius: 14,
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
}) 