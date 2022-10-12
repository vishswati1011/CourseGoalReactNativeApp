/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Alert, ImageBackground
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
const Login = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [Username, setUsername] = useState();
  const [password, setPassword] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleSubmit = () => {

    if (Username === "Swati" && password === "123456") {
      navigation.navigate('Home', { myName: `${Username}` })
    }
    else {
      Alert.alert("Username and password invalid")
    }
  }

  return (
    <ScrollView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />


      <View style={styles.container}>
        <ImageBackground style={styles.image_logo} source={require('../../assest/logo.jpeg')} >
          {/* <Text style={styles.text}> Welcome to Talkdesk</Text> */}
        </ImageBackground>

        <Text style={styles.text}> Welcome to Talkdesk</Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUsername(e)}
          value={Username}
          placeholder="Username"
          keyboardType="password"
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => setPassword(e)}
          value={password
          }
          placeholder="Password"
          keyboardType="password"
        />
        <View style={styles.fixToText}>
          <Button

            title="Forgot Password"
            color="#f194ff"
            onPress={() => Alert.alert('reset new password')}
          />
          <Button
            title="Login"
            color="#f194ff"
            onPress={() => handleSubmit()}
          />
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    // marginTop:10
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image_logo: {
    width: 350,
    height: 350,
    // marginTop:-150,
    marginBottom: 5
  },
  text: {
    color: "white",
    fontSize: 20,
    width: 350,
    height: 50,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }


});

export default Login;
