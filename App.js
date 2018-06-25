import React from 'react';
import {
  Alert, 
  AppRegistry,
  Button,
  Image,
  ImageBackground,
  StyleSheet, 
  Text,
  TextInput,
  View 
} from 'react-native';
import appBG from './images/app_bg.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onChanged(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <ImageBackground source={appBG} alt="bg" style={{flex: 1, justifyContent: 'center', paddingBottom: 48}}>

        <View style={{height: '50%', justifyContent: 'space-between'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Enter Your Mobile Number</Text>
          </View>
          
          <View style={{alignItems: 'center'}}>
            <View style={{width: '50%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 30, paddingRight: 30}}>

              <Text style={{fontSize: 28, color: 'lightgray', width: '22%', textAlign: 'center'}}>+63</Text>

              <TextInput
              maxLength={3}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              style={{fontSize: 28, width:'22%', textAlign: 'center'}}/>

              <TextInput
              maxLength={3}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              style={{fontSize: 28, width:'22%', textAlign: 'center'}}/>

              <TextInput
              maxLength={4}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              style={{fontSize: 28, width:'30%', textAlign: 'center'}}/>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <View style={{width: '30%'}}>
              <Button
              title="Enter"
              style={{fontSize: 18}}
              onPress={() =>
                this.props.navigation.navigate('SelectLocker', {
                  itemId: 86,
                  otherParam: this.state.text,
                })
              }/>
            </View>
          </View>

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
