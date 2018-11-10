import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  BackHandler,
} from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { fetchAlbumData } from '../actions/action-albums';

// Components
import BasicList from '../components/BasicList';
import Loader from '../components/Loader';
import AlbumListItem from '../components/ListItemViews/AlbumListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
});

class Albums extends Component {
  state = {}

  componentDidMount = () => {
    const { navigation } = this.props;
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.props.fetchAlbumData(navigation.state.params.userId);
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  }

  render() {
    const { isError, isFetching, albums } = this.props;

    if (isFetching) {
      return (
        <View style={styles.container}>
          <Loader text="Loading Albums..." />
        </View>
      );
    }

    if (isError) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>Unable to Fetch Users</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Albums</Text>
        <BasicList
          data={albums}
          ListItem={AlbumListItem}
        />
      </View>
    );
  }
}

Albums.propTypes = {
  navigation: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchAlbumData: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  albums: state.albums.data,
  isFetching: state.loader.isFetching,
  isError: state.loader.isError,
  error: state.loader.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAlbumData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
