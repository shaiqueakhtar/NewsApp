import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const API_KEY = 'c04d372c4e354a079603e6508bea7578';
const base_url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY;
export default function NewsFeed() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(base_url).then((response: any) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  }, []);

  const renderItem = ({item}: any) => {
    console.log(item);
    return (
      <View style={styles.feedContainer}>
        <Text style={styles.titleTxt}>{item.title}</Text>
        <Image
          source={{uri: `${item.urlToImage}`}}
          style={styles.imageContainer}
        />
        <Text style={styles.descriptionTxt}>{item.description}</Text>
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => {
            Linking.openURL(`${item.url}`);
          }}>
          Read More
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.container}
      data={articles}
      renderItem={item => renderItem(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  feedContainer: {
    borderWidth: 0.5,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: '400',
    color: '#023047',
    width: widthPercentageToDP(100),
    textAlign: 'justify',
    marginVertical: 10,
  },
  imageContainer: {
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(40),
  },
  descriptionTxt: {
    width: widthPercentageToDP(100),
    textAlign: 'justify',
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
  },
  hyperlinkStyle: {
    color: 'blue',
    fontSize: 16,
  },
});
