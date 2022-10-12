import React, { useState } from "react";
import { View, Button,StyleSheet ,TextInput} from "react-native";
const Home =(props) =>{
    const [enteredGoalText,setEnteredGoalText]=useState();
    function goalInputHandle (enteredText){
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler () {
        console.log(enteredGoalText,"GoalInput")
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.textItem} 
                 placeholder="Your Course Goal"
                 onChangeText={goalInputHandle}
                 value={enteredGoalText}
                 />
                <Button title="Add Goals" onPress={addGoalHandler}/>
            </View>   
    )
}

const styles = StyleSheet.create({

    
    inputContainer:{
        // flex:,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#cccccc'
    },
    textItem :{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'70%',
        marginRight:8,
        padding:8
    },
    
})

export default Home;