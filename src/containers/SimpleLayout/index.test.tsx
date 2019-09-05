// @ts-ignore
import { Theme } from 'liquify';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import SimpleLayout from '.';
import { rootReducer } from '../../store/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
        <Theme>
            <SimpleLayout />
        </Theme>
        </Provider>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});