import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DataStore } from 'aws-amplify';
import * as Stuff from './src/models';
import ExpoSQLiteAdapter from '@aws-amplify/datastore-storage-adapter/ExpoSQLiteAdapter';

DataStore.configure({
  storageAdapter: ExpoSQLiteAdapter
});

export default function App() {
  DataStore.start();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
