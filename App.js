import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import dayjs from 'dayjs';
import {useEffect, useState} from "react";

export default function App() {
  const [numberDictionary, setNumberDictionary] = useState({});
  const [time, setTime] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(()=>{
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const showPrompt = () => {
    Alert.prompt('Enter a number', `Time: ${time}`, (inputValue) => {
      const newNumber = parseInt(inputValue);
      console.log(newNumber, inputValue);

      if (!isNaN(newNumber)) {
        // const time = new Date().toLocaleString();
        setNumberDictionary({
          ...numberDictionary,
          [newNumber]: time,
        });

      } else {
        // Show an error message or handle invalid input
        Alert.alert('Invalid Input', 'Please enter a valid number');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text>{time}</Text>
      <Button title="StopWatch" onPress={showPrompt}/>
      <Text>{JSON.stringify(numberDictionary)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
