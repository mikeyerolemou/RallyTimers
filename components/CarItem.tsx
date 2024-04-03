import React from "react";
import {View, Text, StyleSheet} from "react-native";

const CarItem = (props) => {
    return (
        <View style={styles.container}>
            <Text>Car {props.carNumber}</Text>
            <Text>{props.clockTime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
});

export default CarItem;