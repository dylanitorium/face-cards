import 'whatwg-fetch';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from './redux/store';
import * as users from './redux/user';
import CardList from './components/CardList';
import PostList from './components/PostList';

class PureApp extends Component {
  componentWillMount() {
    this.props.fetchUserList();
  }

  render() {
    return (
      <div className="App">
        <CardList {...this.props} />
        <PostList {...this.props} />
      </div>
    );
  }
};

const ConnectedApp = connect(
  (state) => ({
    users: state.user.users,
    currentUserId: state.user.currentUserId,
    currentPosts: state.user.currentPosts,
  }),
  {
    fetchUserList: users.fetchUserList,
    onCardClick: users.fetchUserPosts,
  }
)(PureApp);

const App = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)


export default App;
