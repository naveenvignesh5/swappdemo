import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
});

const BasicList = ({ data, ListItem, onItemPress }) => (
  <View style={styles.container}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <ListItem {...item} onPress={() => onItemPress(item)} />}
      keyExtractor={item => item.id.toString()}
    />
  </View>
);

BasicList.propTypes = {
  data: PropTypes.array.isRequired,
  ListItem: PropTypes.any.isRequired,
  onItemPress: PropTypes.func,
};

BasicList.defaultProps = {
  onItemPress: () => {},
};

export default BasicList;
