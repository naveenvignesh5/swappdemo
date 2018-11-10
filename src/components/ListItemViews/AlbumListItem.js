import React from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: COLORS.black,
    borderRadius: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
    textAlign: 'center',
  },
});

const AlbumListItem = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableHighlight
      style={styles.itemContainer}
      underlayColor={COLORS.darkGrey}
      onPress={onPress}
    >
      <View>
        <Text style={styles.name}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

AlbumListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AlbumListItem;
