import React from 'react';
import {
  View, FlatList, StyleSheet, RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
});

const BasicList = ({
  data, ListItem, onItemPress, onRefresh, refreshing,
}) => (
  <View style={styles.container}>
    <FlatList
      refreshControl={(
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
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
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
};

BasicList.defaultProps = {
  onItemPress: () => {},
  onRefresh: () => {},
  refreshing: false,
};

export default BasicList;
