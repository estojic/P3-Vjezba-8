import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function HomeScreen({ route, navigation }) {
  // // setName je tu da označava promjenjen name konstantu
  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [password,setPassword] = useState("");

  const sendRequest = async () =>{
    
    try {
      // nađi custom api adresu na stranici https://webhook.site
      await fetch("https://webhook.site/49e06bca-30ec-41f6-b3ed-3639dd46abdc", {
        method: "post",
        mode: "no-core",
        headers:{
          Accept:"application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          password: password,
        })
      })
      // ovo je da očisti input field
      setName("")
      setSurname("")
      setPassword("") 
    } catch (error) {
      
    }
  }

  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> LOGIN </Text>

      <View style={styles.inputWrapper}>
        <Text>Name:</Text>
        <TextInput 
        style={styles.inputField}
        onChangeText={setName} 
        value={name}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Surname:</Text>
        <TextInput 
        style={styles.inputField}
        onChangeText={setSurname} 
        value={surname}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Password:</Text>
        <TextInput 
        style={styles.inputField}
        onChangeText={setPassword} 
        value={password}
        secureTextEntry={true}
        />
      </View>
      
      <Button title="send" onPress={sendRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
  },
  inputWrapper:{
    flexDirection: "row",
    alignItems: "center"
  },
  inputField: {
    flex: 1,
    width: 100,
    margin: 12,
    padding: 5,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
  },

});
