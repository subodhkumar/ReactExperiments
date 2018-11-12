import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './pages/Home';


export default class App = StackNavigator({
  Home: {screen: HomeScreen}
})
/*export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'powderblue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 50 }}>
            {' '}
            Hello ! {this.state.text}
          </Text>
        </View>
        <View style={{ flex: 2, backgroundColor: 'skyblue', padding: 20 }}>
          <TextInput
            style={{ height: 60, fontSize: 30, color: 'white' }}
            placeholder="Type here"
            onChangeText={text => this.setState({ text })}
          />

          <Button
            title="Click Here"
            onPress={() => {
              Alert.alert('You Clicked the Button');
            }}
          />
          <Button
            style={{ backgroundColor: 'red' }}
            title="Click Again"
            onPress={() => {
              Alert.alert('You Clicked the Button');
            }}
          />
        </View>
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
} */

const styles = StyleSheet.create({
  title: {
    color: 'orange',
    fontSize: 48,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 40,
  },
});
