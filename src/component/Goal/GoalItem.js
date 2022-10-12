import React from "react";
import { View, Text, StyleSheet ,Pressable} from "react-native";
const Home = (props ) => {
    function deleteGoalHandler (deleteItem) {
        console.log(deleteItem,"deleteItem")
        props.onDeleteItem(deleteItem);
    }
    return (
        <Pressable
         onPress={()=>deleteGoalHandler(props.id)}
         android_ripple={{color:'#dddddd'}}
        style={({pressed})=>pressed && styles.pressedItem }
        >
            {console.log(props.id,"id")}
             <View style={styles.goalItem} key={props.id}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
        </Pressable>

    )

}

const styles = StyleSheet.create({

    goalItem: {
        margin: 8,
        padding: 8,
        // color:'red',
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem:{
        opacity:0.5,
    },
    goalText: {
        color: 'white',
        padding:8
    }
})

export default Home;