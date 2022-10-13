import React, { useState } from "react";
import { View,StyleSheet,FlatList,Button,StatusBar} from "react-native";
import GoalInput from '../component/Goal/GoalInput'
import GoalItem from '../component/Goal/GoalItem'
const Home =() =>{
    // const {myName}= route.params
    const [courseGoals,setCourseGoal]=useState([]);
    const [modalIsVisible,setModalIsVisible]=useState(false)
   
    function addGoalHandler (enteredGoalText) {
        console.log("click",courseGoals)

        // setCourseGoal([...courseGoals,enteredGoalText])
        setCourseGoal((currentCourseGoal)=>[...currentCourseGoal,{
            text:enteredGoalText,
            id:Math.random().toString()
        }]);
        setModalIsVisible(false)
    }

    function startAllGoalHandler () {
        setModalIsVisible(true)
    }
    function endAddGoalHandler (){
        setModalIsVisible(false);
    }
    function deleteGoalHandler(id){
        console.log("deleteGoalHandler",id)
        setCourseGoal(currentCourseGoal =>{
            return currentCourseGoal.filter((goal)=>goal.id!==id)
        });
    }
    console.log(courseGoals,"after delete")
    return (
        <>
        <StatusBar style="light" />      
              <View style={styles.appContainner}>
            <Button title="Add new goal" 
            color="#5e0acc"
            onPress={startAllGoalHandler}
            />
            {modalIsVisible && <GoalInput 
            visible={modalIsVisible} 
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}/>}
            <View  style={styles.goalContainer}>

                {/**before this commit i added scrollView */}
                <FlatList
                data={courseGoals}
                renderItem={(itemData)=>{
                    console.log(itemData.item.id)
                        return(
                            <GoalItem 
                            text={itemData.item.text}
                            id={itemData.item.id}
                            onDeleteItem={deleteGoalHandler}/>
                        )
                }}
                keyExtractor={(item,index)=>{
                    return item.id
                }}
                alwaysBounceVertical={false}
                />
            </View>
        </View>
        </>

    )
}

const styles = StyleSheet.create({

    appContainner :{
        flex:1,
        paddingTop:50,
        paddingHorizontal:16,
        backgroundColor:"#1e085a"
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