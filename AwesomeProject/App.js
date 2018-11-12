import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//https://rxjs-dev.firebaseapp.com/generated/images/marketing/home/Rx_Logo-512-512.png
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./pages/Rx.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is Modal</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Details'),
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Details Screen </Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Home'),
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount', () => alert('test'))}
          title="+1"
          color="red"
        />
      ),
    };
  };

  state = {
    count: 0,
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Home Screen {this.state.count} </Text>
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Pop Up"
          onPress={() => this.props.navigation.navigate('MyModal')}
        />
      </View>
    );
  }
}

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    // initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#ccc',
      },
      headerLeft: (
        <Button onPress={() => alert('test')} title="+1" color="red" />
      ),
    },
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
