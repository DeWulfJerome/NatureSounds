import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const NavRow = props => {
  return (
    <View style={navStyle.wrapper}>
      <TouchableOpacity>
        <Text style={navStyle.text}>Natural</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[navStyle.text, navStyle.activeText]}>Forest</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={navStyle.text}>Rain</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={navStyle.text}>Others</Text>
      </TouchableOpacity>
    </View>
  );
};

const navStyle = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    transform: [{rotate: '-90deg'}],
    fontWeight: '600',
    opacity: 0.4,
  },
  activeText: {
    opacity: 1,
  },
});

export default NavRow;
