import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Dots from './Dots';

const UserHeader = props => {
  return (
    <View style={userStyle.wrapper}>
      <Image
        source={require('../../assets/me.png')}
        style={userStyle.imageStyle}></Image>
      <View style={userStyle.textWrapper}>
        <Text style={[userStyle.textStyle, userStyle.bigText]}>
          Jerome De Wulf
        </Text>
        <Text style={[userStyle.textStyle, userStyle.smallText]}>
          133 sounds
        </Text>
      </View>

      <View
        style={{
          paddingRight: 20,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Dots></Dots>
      </View>
    </View>
  );
};

const userStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageStyle: {
    height: 45,
    width: 45,
    borderRadius: 45,
    marginRight: 15,
  },
  textWrapper: {},
  textStyle: {
    color: '#fff',
  },
  bigText: {
    fontSize: 22,
    fontWeight: '500',
  },
  smallText: {
    fontSize: 14,
    opacity: 0.7,
    fontWeight: '300',
  },
});

export default UserHeader;
