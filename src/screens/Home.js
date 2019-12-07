import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import StyleConstants from '../../StyleConstants';

import UserHeader from '../components/UserHeader';
import CollectionList from '../views/CollectionList';
import NavRow from '../components/NavRow';

const Home = props => {
  return (
    <View style={homeStyle.screen}>
      <SafeAreaView>
        <UserHeader></UserHeader>
      </SafeAreaView>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <CollectionList></CollectionList>
        <NavRow></NavRow>
      </View>
    </View>
  );
};

const homeStyle = StyleSheet.create({
  screen: {
    flex: 1,
    paddingLeft: 40,
    backgroundColor: StyleConstants.colors.blue.medium,
  },
});

export default Home;
