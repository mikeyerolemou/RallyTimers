import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import CarList from "./components/CarList";

export default function App() {
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const showPrompt = () => {
        Alert.prompt('Enter a number', `Time: ${formattedTime}`, (inputValue) => {
            const newNumber = parseInt(inputValue);
            console.log(newNumber, formattedTime);

            if (!isNaN(newNumber)) {
                // const time = new Date().toLocaleString();
                setNumberDictionary({
                    ...numberDictionary,
                    [newNumber]: formattedTime,
                });

            } else {
                // Show an error message or handle invalid input
                Alert.alert('Invalid Input', 'Please enter a valid number');
            }
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>{formattedTime}</Text>
                {/*<Button title="StopWatch" onPress={showPrompt}/>*/}
                <CarList clockTime={formattedTime}/>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
});
