import React, { useState } from "react";
import { View,Text, Button,StyleSheet ,TextInput,ScrollView} from "react-native";
const Home =({route,navigation}) =>{
    // const {myName}= route.params
    const [courseGoals,setCourseGoal]=useState([]);
    const [enteredGoalText,setEnteredGoalText]=useState();
    function goalInputHandle (enteredText){
        console.log(enteredGoalText,"entered goal")
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler () {
        console.log("click",courseGoals)

        setCourseGoal([...courseGoals,enteredGoalText])
        // setCourseGoal((currentCourseGoal)=>[...currentCourseGoal,enteredGoalText]);
    }
    return (
        <View style={styles.appContainner}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textItem} 
                 placeholder="Your Course Goal"
                 onChangeText={goalInputHandle}
                 value={enteredGoalText}
                 />
                <Button title="Add Goals" onPress={addGoalHandler}/>
            </View>
            <View  style={styles.goalContainer}>
                <ScrollView>
                {courseGoals.map((goal)=>(
                    <View style={styles.goalItem} key={goal}>
                    <Text style={styles.goalText}>{goal}</Text>
                    </View>
                ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    appContainner :{
        flex:1,
        paddingTop:50,
        paddingHorizontal:16,
    },
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
    goalContainer:{
        flex:5,
        // borderBottomColor:"black"
    },
    goalItem:{
        margin:8,
        padding:8,
        // color:'red',
        borderRadius:6,
        backgroundColor:'#5e0acc',
    },
    goalText:{
        color:'white'
    }
})

export default Home;