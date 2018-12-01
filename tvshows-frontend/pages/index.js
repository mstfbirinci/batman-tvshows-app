import React, { Component } from 'react';
import { Provider } from 'react-redux'
import App from '../src/App';
import store from '../src/_store';
import '../src/components/tvshows/assets/css/styles.scss';
import '../src/components/header/assets/css/styles.scss';

class IndexPage extends Component {
  render() {
    return (
      
      <Provider store={store}>
      <div>
        <App/>
      </div>
      </Provider>
    );
  }
}

export default IndexPage;
