// @ts-ignore
import { Theme } from 'liquify';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { SidebarNavItem } from '.';
import { rootReducer } from '../../store/reducers';
import { defaultColor, selectedBackground, selectedColor, hoveringBackground, hoveringColor, iconSize, StyledBottomDiv, StyledIconButton, StyledIconDiv, StyledNav, StyledSpacerDiv, StyledTopDiv } from './styles';

const store = createStore(rootReducer, applyMiddleware(thunk))

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Theme>
                <SidebarNavItem  iconName='dashboard'
                    displayName='Dashboard'
                    iconSize={iconSize}
                    defaultColor={defaultColor}
                    selectedColor={selectedColor}
                    selectedBackground={selectedBackground}
                    hoveringColor={hoveringColor}
                    hoveringBackground={hoveringBackground}
                    isCollapsed={true}
                    selectedNavItem={'dashboard'}
                    hoveringNavItem={'dashboard'}
                    handleNavItemClick={() => {return ''}}
                    handleMouseEnter={() => {return ''}}
                    handleMouseLeave={() => {return ''}}/>
            </Theme>
        </Provider>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});

