import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class FirstScreen extends Component{
  static navigationOptions = {
    title: 'Collapsible',
  }

  render(){
    const { navigation } = this.props;

    return (
      <View>
        <TouchableOpacity style={{margin: 20}} onPress={() => navigation.navigate('SecondScreen')}>
          <Text>Second Page</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{margin: 20}} onPress={() => navigation.navigate('ThirdScreen')}>
          <Text>Third Page</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}