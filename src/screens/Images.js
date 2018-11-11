import React, { Component } from 'react';
import {
  View, Text, StyleSheet, BackHandler, Button,
} from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import BasicList from '../components/BasicList';
import Loader from '../components/Loader';
import ImageListItem from '../components/ListItemViews/ImageListItem';
import ImageModal from '../components/ImageModal';

// Actions
import { fetchImageData } from '../actions/action-images';

// Constants
import { COLORS } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 14,
    color: COLORS.red,
    marginBottom: 20,
  },
});

class Images extends Component {
  state = {
    modalVisible: false,
    currentImage: {
      url: '',
      title: '',
    },
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.handleImageDataFetch();
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleImageDataFetch = () => {
    const { navigation } = this.props;
    this.props.fetchImageData(navigation.state.params.albumId);
  }

  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  }

  handleItemPress = (image) => {
    this.setState({
      modalVisible: true,
      currentImage: image,
    });
  }

  handleModalClose = () => {
    this.setState({
      modalVisible: false,
      currentImage: {
        url: '',
        title: '',
      },
    });
  }

  render() {
    const { isError, isFetching, images } = this.props;

    if (isFetching) {
      return (
        <View style={styles.container}>
          <Loader text="Loading Images..." />
        </View>
      );
    }

    if (isError) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>Unable to Fetch Images</Text>
          <Button title="Retry" color={COLORS.red} onPress={this.handleImageDataFetch} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Your Pics</Text>
        </View>
        <BasicList
          data={images}
          ListItem={ImageListItem}
          onItemPress={this.handleItemPress}
          onRefresh={this.handleImageDataFetch}
          refreshing={isFetching}
        />
        <ImageModal
          visible={this.state.modalVisible}
          onRequestClose={this.handleModalClose}
          url={this.state.currentImage.url}
          title={this.state.currentImage.title}
          animationType="fade"
          transparent
        />
      </View>
    );
  }
}

Images.propTypes = {
  navigation: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchImageData: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  images: state.images.data,
  isFetching: state.loader.isFetching,
  isError: state.loader.isError,
  error: state.loader.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImageData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Images);
