import React, { PureComponent } from 'react';
import {
  View, Modal, Image, StyleSheet, Text, Button,
} from 'react-native';
import PropTypes from 'prop-types';

// Images
import defaultImage from '../images/defaultImage.png';
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.transBlack,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'monospace',
    color: COLORS.black,
  },
  modalImage: {
    width: 200,
    height: 200,
    marginVertical: 30,
  },
  modalWrapper: {
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 10,
  },
});

class ImageModal extends PureComponent {
  render() {
    const {
      url, title, onRequestClose, ...modalProps
    } = this.props;
    return (
      <View style={styles.modalContainer} onPress={onRequestClose}>
        <Modal
          {...modalProps}
          onRequestClose={onRequestClose}
        >
          <View style={styles.modalWrapper}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Image style={styles.modalImage} source={{ uri: url }} defaultSource={defaultImage} />
            <Button color={COLORS.darkPurple} onPress={onRequestClose} title="Close" />
          </View>
        </Modal>
      </View>
    );
  }
}

ImageModal.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageModal;
