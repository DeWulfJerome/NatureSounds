import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const Dots = props => {
  return (
    <TouchableOpacity style={dotStyle.wrapper}>
      <View style={dotStyle.dotWrapper}>
        <View style={dotStyle.dot}></View>
        <View style={dotStyle.dot}></View>
      </View>
      <View style={dotStyle.dotWrapper}>
        <View style={dotStyle.dot}></View>
        <View style={dotStyle.dot}></View>
      </View>
    </TouchableOpacity>
  );
};

const dotStyle = StyleSheet.create({
  wrapper: {
    /* transform: [{rotate: '45deg'}], */
  },
  dot: {
    backgroundColor: '#fff',
    height: 5,
    width: 5,
    margin: 3,
  },
  dotWrapper: {
    flexDirection: 'row',
  },
});

export default Dots;
