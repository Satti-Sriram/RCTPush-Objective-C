import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle, viewStyle } = styles;
  return (
  
            <View style={viewStyle}>
              <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle} > click </Text>
             {/* <Button title="Hello" color="#FFFFFF" accessibilityLabel="Tap on Me"/> */}
             </TouchableOpacity>
           </View>
   
  );
};
const styles = {
  container: {
    flex: 1,
    
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  viewStyle: {

   
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    height: 60

  }
};
export default Button;
