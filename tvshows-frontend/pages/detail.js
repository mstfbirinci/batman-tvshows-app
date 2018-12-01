import React, { Component } from 'react';
import Detail from '../src/components/detail';
import store from '../src/_store';
import { Provider } from 'react-redux';
import '../src/components/detail/assets/css/styles.scss';

class DetailPage extends Component {

    static async getInitialProps(context) {

        return {
            id: context.query.id,
            navigation: context.query.navigation
        };
    };

    render() {
        return (
            <Provider store={store}>
                <Detail id={Number(this.props.id)} />
            </Provider>
        )
    }
}

export default DetailPage;

