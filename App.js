import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';


class App extends Component {
  state = {
    flag : false
  }

  onPress = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

 render() {
   return (
     <View style={styles.container}>
        <Text style={styles.heading}> Zadanie 2 </Text>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        > 
        <Text> {this.state.flag === true ? 'Ukryj': 'Poka\u017C'} </Text> 
        </TouchableOpacity>
        <View>
            {this.state.flag === true ? 
            <View style={styles.innerContainer}> 
              <Text style={styles.TextA}>{'Nazywam si\u0119'}</Text> 
              <Text style={styles.TextB}>{'Szymon Tyrka'}</Text> 
            </View> 
            : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 12,
    width: 80,
    marginBottom: 20
  },
  innerContainer: {
    alignItems: 'center',
    textAlign:'center',
  },
  TextA: {
    fontSize: 14 ,
  },
  TextB: {
    fontWeight:"bold",
    fontSize: 16 ,
  }
})

export default App;