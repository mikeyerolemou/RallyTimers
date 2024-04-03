import React, {useState} from "react";
import {View, FlatList, Button, TextInput, Alert} from "react-native";
import CarItem from "./CarItem";

const CarList = (props) => {
        const [cars, setCars] = useState([
            {id: 1, carNumber: 23, clockTime: '14:30:00.245'},
            {id: 2, carNumber: 45, clockTime: '14:32:34.105'},
            {id: 3, carNumber: 2, clockTime: '14:33:12.345'},
            // Add more cars as needed
        ]);
        const [inputCarNumber, setInputCarNumber] = useState(0);

        const handleTextInputChange = (text) => {
            setInputCarNumber(parseInt(text));
        }

        const handleCarAdd = () => {

            if (isNaN(inputCarNumber)) {
                Alert.alert('Invalid Input', 'Please enter a valid number');
                return;
            }

            setCars([...cars, {
                id: cars.length + 1,
                carNumber: inputCarNumber,
                clockTime: props.clockTime
            }])
        };


        return (
            <View>
                <FlatList
                    data={cars}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <CarItem carNumber={item.carNumber} clockTime={item.clockTime}/>}
                />
                <TextInput
                           placeholder="Enter a Car number"
                           keyboardType="numeric"
                           onChangeText={handleTextInputChange}/>

                <Button title='Add Car'
                        onPress={handleCarAdd}/>
            </View>
        );
    }
;

export default CarList;