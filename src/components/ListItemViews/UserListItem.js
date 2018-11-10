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
    backgroundColor: COLORS.purple,
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.yellow,
  },
});

const UserListItem = (props) => {
  const { name, email, onPress } = props;
  return (
    <TouchableHighlight
      style={styles.itemContainer}
      underlayColor={COLORS.darkPurple}
      onPress={onPress}
    >
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </TouchableHighlight>
  );
};

UserListItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default UserListItem;
