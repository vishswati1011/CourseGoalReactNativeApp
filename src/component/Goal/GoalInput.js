import React, { useState } from "react";
import { Image,View, Button, StyleSheet, TextInput, Modal } from "react-native";
const Home = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState();
    function goalInputHandle(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler() {
        console.log(enteredGoalText, "GoalInput")
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style ={styles.image} source={require('../../../assest/goalimage.jpeg')}/>
                <TextInput style={styles.textItem}
                    placeholder="Your Course Goal"
                    onChangeText={goalInputHandle}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goals" onPress={addGoalHandler}
                        color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel"  onPress={props.onCancel}
                        color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({


    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#311b6b'
    },
    image:{
        width:100,
        height:100,
        margin:20
    },

    textItem: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        width: '100%',
        borderRadius:6,
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        marginTop:16
,        flexDirection: "row"
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }

})

export default Home;