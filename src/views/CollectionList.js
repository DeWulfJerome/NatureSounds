import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

import StyleConstants from '../../StyleConstants';

const CollectionList = props => {
  const [sounds, setSounds] = useState([
    {
      title: 'Being in the forest',
      length: '3.15s',
      color: 'green',
      number: '01',
      img: 'tree',
    },
    {
      title: 'Bird cry',
      length: '2.48s',
      color: 'purple',
      number: '02',
      img: 'bird',
    },
    {
      title: 'Sound of the wind',
      length: '3.15s',
      color: 'yellow',
      number: '03',
    },
    {
      title: 'Bird cry',
      length: '2.48s',
      color: 'purple',
      number: '04',
      img: 'bird',
    },
    {
      title: 'Being in the forest',
      length: '3.15s',
      color: 'green',
      number: '05',
      img: 'tree',
    },
    {
      title: 'Sound of the wind',
      length: '3.15s',
      color: 'yellow',
      number: '06',
    },
  ]);

  const getImg = name => {
    let img = '';
    if (name === 'tree') {
      img = require('../../assets/tree.png');
    } else if (name === 'bird') {
      img = require('../../assets/bird.png');
    }
    return img;
  };

  const setStyle = name => {
    if (name === 'tree') {
      return {height: 90, width: 70};
    } else {
      return {height: 75, width: 80};
    }
  };

  const renderListItems = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          listStyle.listItemWrapper,
          {backgroundColor: StyleConstants.colors[item.color]},
        ]}>
        <View>
          <Text style={listStyle.listTitle}>{item.title}</Text>
          <Text style={listStyle.listLength}>{item.length}</Text>
        </View>
        <View style={listStyle.numbImgWrapper}>
          <Text style={listStyle.listNumber}>{item.number}</Text>
          {item.img ? (
            <Image style={setStyle(item.img)} source={getImg(item.img)}></Image>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={listStyle.wrapper}>
      <Text style={listStyle.titleStyle}>Forest collection</Text>
      <FlatList
        contentContainerStyle={{marginTop: 40, zIndex: 999999}}
        renderItem={renderListItems}
        data={sounds}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.number}></FlatList>
      {/* Darker background */}
      <View style={listStyle.darkBack}></View>
    </View>
  );
};

const listStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 40,
  },
  titleStyle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '400',
  },
  listTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
  },
  listLength: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '200',
    marginTop: 5,
  },
  listNumber: {
    color: '#fff',
    fontSize: 60,
    fontWeight: '400',
  },
  darkBack: {
    backgroundColor: StyleConstants.colors.blue.dark,
    height: '80%',
    position: 'absolute',
    borderTopRightRadius: 60,
    bottom: 0,
    left: -40,
    width: '110%',
    zIndex: -1,
  },
  listItemWrapper: {
    backgroundColor: 'green',
    marginBottom: 20,
    width: 240,
    borderRadius: 25,
    padding: 20,
    height: 240,
    justifyContent: 'space-between',
  },
  numbImgWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default CollectionList;
