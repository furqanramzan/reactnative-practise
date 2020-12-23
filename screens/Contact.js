import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ContactScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Open up  to start working on your app!</Text>
            <Button title="Go to Home Screen" onPress={() => navigation.navigate("Home")} />
            <Button title="Go to Contact Screen Again" onPress={() => navigation.push("Contact")} />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
