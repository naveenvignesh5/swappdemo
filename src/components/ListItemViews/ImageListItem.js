import React, { PureComponent } from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

// Constants
import { COLORS } from '../../constants/colors';

// Images
import defaultThumb from '../../images/defaultThumb.png';

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: COLORS.purple,
    borderRadius: 20,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  name: {
    width: '70%',
    color: COLORS.white,
    fontSize: 18,
  },
});

class ImageListItem extends PureComponent {
  state = {}

  render() {
    const {
      onPress,
      title,
      thumbnailUrl,
    } = this.props;
    return (
      <TouchableHighlight
        style={styles.itemContainer}
        underlayColor={COLORS.darkPurple}
        onPress={onPress}
      >
        <View style={styles.itemWrapper}>
          <Text style={styles.name}>{title}</Text>
          <Image
            style={styles.imageStyle}
            source={{ uri: thumbnailUrl }}
            defaultSource={defaultThumb}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

ImageListItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

ImageListItem.defaultProps = {
  onPress: () => {},
};

export default ImageListItem;
