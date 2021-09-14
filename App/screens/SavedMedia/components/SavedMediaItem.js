import React from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {Icon} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {BASE_IMAGE_URL, COLORS} from '../../../consts/consts';

export const SavedMediaItem = ({
  index,
  lastIndex,
  item,
  width,
  itemWidth,
  itemHeight,
  horizontalSpace,
  scrollX,
}) => {
  const inputRange = [
    (index - 1) * itemWidth,
    index * itemWidth,
    (index + 1) * itemWidth,
  ];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -60, 0],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width: itemWidth,
          height: itemHeight,
          marginLeft: index === 0 ? horizontalSpace : 0,
          marginRight: index === lastIndex ? horizontalSpace : 0,
          transform: [{translateY}],
        },
      ]}>
      <FastImage
        source={{uri: `${BASE_IMAGE_URL}w500${item.poster_path}`}}
        style={[
          styles.image,
          {
            width: itemWidth * 0.9,
            height: itemHeight * 0.9,
          },
        ]}>
        <View style={styles.topBlock}>
          <View style={styles.outSideCircle}>
            <View style={styles.insideCircle}>
              <Text style={styles.voteText}>{item.vote_average}</Text>
            </View>
          </View>

          <Icon type="antdesign" name="delete" color="red" />
        </View>

        <Text style={styles.title}>{item.title}</Text>
      </FastImage>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: '#000',
  },

  image: {
    //  marginHorizontal: SPACE,
    borderRadius: 20,
    padding: 20,
  },

  topBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  outSideCircle: {
    width: 45,
    height: 45,
    borderRadius: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.DARK_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
  },

  insideCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.DARK_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
  },

  voteText: {
    color: COLORS.DARK_YELLOW,
    fontWeight: 'bold',
    textShadowColor: COLORS.BG_TRANSPARENT_GRAY,
    textShadowOffset: {height: 0.5, width: 0.5},
    textShadowRadius: 1,
  },

  title: {
    fontSize: 25,
    alignSelf: 'center',
    color: COLORS.WHITE,
    textShadowColor: COLORS.BLACK,
    textShadowOffset: {height: 1, width: 1},
    textShadowRadius: 3,
    marginTop: 25,
  },
});
