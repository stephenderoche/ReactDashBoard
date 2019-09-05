// @ts-ignore
import { Icon } from 'liquify';
import React from 'react';
import { connect } from 'react-redux';
import { NavItemType, SidebarNavItem } from '../../components/SidebarNavItem';
import { navHamburgerClicked, navHamburgerMouseEntered, navHamburgerMouseLeft, navItemMouseEntered, navItemMouseLeft, navItemSelected } from '../../store/actions';
import { IApplicationState } from '../../store/states';
import { defaultColor, focusColor, hoveringBackground, hoveringColor, iconSize, selectedBackground, selectedColor, StyledBottomDiv, StyledIconDiv, StyledNav, StyledSpacerDiv, StyledStandaloneIconButton, StyledTopDiv } from './styles';

interface ISidebarNavProps {

    isNavCollapsed: boolean;
    onHamburgerClicked: () => void;
    onHamburgerMouseEnter: () => void;
    onHamburgerMouseLeave: () => void;
    onNavItemClicked: (item: NavItemType) => void;
    onNavItemMouseEnter: (item: NavItemType) => void;
    onNavItemMouseLeave: (item: NavItemType) => void;
    selectedNavItem: NavItemType;
    hoveringNavItem: NavItemType;
    isHoveringHamburger: boolean;
}

interface INavItemInfo {
    displayName: string,
    iconName: string,
    type: NavItemType,
}

const topNavItems: INavItemInfo[] = [
    {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        type: NavItemType.Dashboard,
    },
    {
        displayName: 'Blotter',
        iconName: 'blotter',
        type: NavItemType.Blotter,
    }
];

const bottomNavItems: INavItemInfo[] = [
    {
        displayName: 'Settings',
        iconName: 'tune',
        type: NavItemType.Settings,
    },
    {
        displayName: 'Profile',
        iconName: 'user',
        type: NavItemType.Profile,
    },
    {
        displayName: 'Help',
        iconName: 'Help',
        type: NavItemType.Help,
    }
]

class SidebarNav extends React.Component<ISidebarNavProps> {

    renderSidebarNavItem(navItems: INavItemInfo[]) {
        return navItems.map((item, key) => <SidebarNavItem
            key={key}
            iconName={item.iconName}
            type={item.type}
            displayName={item.displayName}
            iconSize={iconSize}
            defaultColor={defaultColor}
            selectedColor={selectedColor}
            selectedBackground={selectedBackground}
            hoveringColor={hoveringColor}
            hoveringBackground={hoveringBackground}
            isNavCollapsed={this.props.isNavCollapsed}
            selectedNavItem={this.props.selectedNavItem}
            hoveringNavItem={this.props.hoveringNavItem}
            handleNavItemClick={() => this.props.onNavItemClicked(item.type)}
            handleNavItemMouseEnter={this.props.onNavItemMouseEnter}
            handleNavItemMouseLeave={this.props.onNavItemMouseLeave} />);
    }

    render() {
        return (<StyledNav isNavCollapsed={this.props.isNavCollapsed} >
            <StyledTopDiv>
                <StyledStandaloneIconButton                  
                    onMouseEnter={() => this.props.onHamburgerMouseEnter()}
                    onMouseLeave={() => this.props.onHamburgerMouseLeave()}>
                    <StyledIconDiv
                     isHovering={this.props.isHoveringHamburger}>
                        <Icon
                            name='menu'
                            size={iconSize}
                            firstColor={this.props.isNavCollapsed ?
                                this.props.isHoveringHamburger ? hoveringColor :
                                defaultColor : focusColor}
                            onClick={this.props.onHamburgerClicked} />
                    </StyledIconDiv>
                </StyledStandaloneIconButton>
                <StyledSpacerDiv />
                {this.renderSidebarNavItem(topNavItems)}
            </StyledTopDiv>
            <StyledBottomDiv>
                {this.renderSidebarNavItem(bottomNavItems)}
            </StyledBottomDiv>
        </StyledNav>);
    }
}

const mapStateToProps = (state: IApplicationState) => {
    return {
        isNavCollapsed: state.navigation.isNavCollapsed,
        isHoveringHamburger: state.navigation.isHoveringHamburger,
        selectedNavItem: state.navigation.selectedNavItem,
        hoveringNavItem: state.navigation.hoveringNavItem
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onHamburgerClicked: () => { dispatch(navHamburgerClicked()) },
        onHamburgerMouseEnter: () => { dispatch(navHamburgerMouseEntered()) },
        onHamburgerMouseLeave: () => { dispatch(navHamburgerMouseLeft()) },
        onNavItemClicked: (item: NavItemType) => { dispatch(navItemSelected(item)) },
        onNavItemMouseEnter: (item: NavItemType) => { dispatch(navItemMouseEntered(item)) },
        onNavItemMouseLeave: (item: NavItemType) => { dispatch(navItemMouseLeft(item)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav);