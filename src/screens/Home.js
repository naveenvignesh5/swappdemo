import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import BasicList from '../components/BasicList';
import UserListItem from '../components/ListItemViews/UserListItem';

// Actions
import { fetchUserData } from '../actions/action-users';
import { COLORS } from '../constants/colors';
import Loader from '../components/Loader';
import { NAVIGATION } from '../constants/routeNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 14,
    color: COLORS.red,
  },
});

class Home extends Component {
  state = {}

  componentDidMount = () => {
    this.props.fetchUserData();
  }

  handleUserItemPress = (item) => {
    this.props.navigation.navigate(NAVIGATION.albums, { userId: item.id });
  }

  render() {
    const { isError, isFetching, users } = this.props;
    if (isFetching) {
      return (
        <View style={styles.container}>
          <Loader text="Loading Users..." />
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
        <BasicList
          data={users}
          ListItem={UserListItem}
          onItemPress={this.handleUserItemPress}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  fetchUserData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
  isFetching: state.loader.isFetching,
  isError: state.loader.isError,
  error: state.loader.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
