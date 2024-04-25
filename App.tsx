import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {NativeBaseProvider} from "native-base";

type Props = {
  children: React.ReactNode
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>hjahhahahahahsdodohiodhiodhodhiodhio</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
