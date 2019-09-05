// @ts-ignore
import { Icon } from 'liquify';
import React from 'react';
import { StyledIconLabelButton, StyledIconLabelDiv, StyledSpan } from './styles';

interface ISidebarNavItemProps {
    iconName: string;
    displayName: string;
    type: NavItemType;
    iconSize: string;
    selectedNavItem: NavItemType;
    isNavCollapsed: boolean;
    defaultColor: string;
    selectedColor: string;
    selectedBackground: string;
    hoveringColor: string;
    hoveringBackground: string;
    hoveringNavItem: NavItemType;
    handleNavItemClick: (name: string) => void;
    handleNavItemMouseEnter: (name: NavItemType) => void;
    handleNavItemMouseLeave: (name: NavItemType) => void;
}

export enum NavItemType {
    Dashboard = 0,
    Blotter = 1,
    Settings = 2,
    Profile = 3,
    Help = 4
}

export class SidebarNavItem extends React.Component<ISidebarNavItemProps> {
    render() {
        return (<StyledIconLabelButton
            isSelected={this.isSelected()}
            isHovering={this.isHovering()}
            onClick={() => this.props.handleNavItemClick(this.props.iconName.toLowerCase())} 
            onMouseEnter={() => this.props.handleNavItemMouseEnter(this.props.type)}
            onMouseLeave={() => this.props.handleNavItemMouseLeave(this.props.type)}>
            <StyledIconLabelDiv>
                <Icon name={this.props.iconName.toLowerCase()} 
                    size = {this.props.iconSize}
                    firstColor={this.isSelected() ? 
                    this.props.selectedColor : this.isHovering() ?  
                    this.props.hoveringColor : this.props.defaultColor} />
            </StyledIconLabelDiv>
            <StyledSpan 
                isSelected={this.isSelected()} 
                isHovering={this.isHovering()}>
                {this.props.displayName}
            </StyledSpan>
        </StyledIconLabelButton>);
    }

    private isHovering() {
        return this.props.type === this.props.hoveringNavItem;
    }

    private isSelected() {
        return this.props.type === this.props.selectedNavItem;
    }
}
