// @ts-ignore
import { Theme } from 'liquify';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import SimpleLayout from "./containers/SimpleLayout";
import './index.css';
import { connectToCommonBackend } from './services/EventsReader';
import { readLayoutFromFile } from './services/LayoutReader';
import { readUserProfileFromFile } from './services/UserProfileReader';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './store/reducers';


const store = createStore(rootReducer, applyMiddleware(thunk))

// Add a bootsrap file if steps get complicated.
connectToCommonBackend(store);

readLayoutFromFile(store);

readUserProfileFromFile(store);

ReactDOM.render(
    <Provider store={store}>
        <Theme>
            <SimpleLayout/>
       </Theme>
    </Provider>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
