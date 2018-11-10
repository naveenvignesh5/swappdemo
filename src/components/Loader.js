import React, { PureComponent } from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  loaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGrey,
    textAlign: 'center',
    marginBottom: 30,
  },
});

class Loader extends PureComponent {
  render() {
    const { text, size } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.loaderText}>{text}</Text>
        <ActivityIndicator size={size} color={COLORS.darkGrey} />
      </View>
    );
  }
}

Loader.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Loader.defaultProps = {
  size: 'large',
};

export default Loader;
