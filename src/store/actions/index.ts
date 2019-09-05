import { NavItemType } from "../../components/SidebarNavItem";
import { ILayout, IUserProfile } from "../states";

export const NAV_ITEM_SELECTED = 'NAV_ITEM_SELECTED';
export function navItemSelected(navItemType: NavItemType): INavItemSelectedAction {
    return {
        type: NAV_ITEM_SELECTED,
        navItemType,
    };
}
export interface INavItemSelectedAction {
    type: typeof NAV_ITEM_SELECTED;
    navItemType: NavItemType;
}

export const NAV_HAMBURGER_CLICKED = 'NAV_HAMBURGER_CLICKED';
export function navHamburgerClicked(): INavHamburgerClickedAction {
    return {
        type: NAV_HAMBURGER_CLICKED
    };
}
export interface INavHamburgerClickedAction {
    type: typeof NAV_HAMBURGER_CLICKED;
}

export const NAV_HAMBURGER_MOUSE_ENTERED = 'NAV_HAMBURGER_MOUSE_ENTERED';
export function navHamburgerMouseEntered(): INavHamburgerMouseEnteredAction {
    return {
        type: NAV_HAMBURGER_MOUSE_ENTERED,
    };
}
export interface INavHamburgerMouseEnteredAction {
    type: typeof NAV_HAMBURGER_MOUSE_ENTERED;
}

export const NAV_HAMBURGER_MOUSE_LEFT = 'NAV_HAMBURGER_MOUSE_LEFT';
export function navHamburgerMouseLeft(): INavHamburgerMouseLeftAction {
    return {
        type: NAV_HAMBURGER_MOUSE_LEFT,
    };
}
export interface INavHamburgerMouseLeftAction {
    type: typeof NAV_HAMBURGER_MOUSE_LEFT;
}

export const NAV_ITEM_MOUSE_ENTERED = 'NAV_ITEM_MOUSE_ENTERED';
export function navItemMouseEntered(navItemType: NavItemType): INavItemMouseEnteredAction {
    return {
        type: NAV_ITEM_MOUSE_ENTERED,
        navItemType,
    };
}
export interface INavItemMouseEnteredAction {
    type: typeof NAV_ITEM_MOUSE_ENTERED;
    navItemType: NavItemType;
}

export const NAV_ITEM_MOUSE_LEFT = 'NAV_ITEM_MOUSE_LEFT';
export function navItemMouseLeft(navItemType: NavItemType): INavItemMouseLeftAction {
    return {
        type: NAV_ITEM_MOUSE_LEFT,
        navItemType,
    };
}
export interface INavItemMouseLeftAction {
    type: typeof NAV_ITEM_MOUSE_LEFT;
    navItemType: NavItemType;
}

export const GROUP_SELECTED = 'GROUP_SELECTED';
export function groupSelected(assetType: string, sourceId: string): IGroupSelectedAction {
    return {
        type: GROUP_SELECTED,
        assetType,
        sourceId,
    };
}
export interface IGroupSelectedAction {
    type: typeof GROUP_SELECTED;
    assetType: string;
    sourceId: string;
}

export const LAYOUT_READ_COMPLETED = "LAYOUT_READ_COMPLETED";
export function layoutReadCompleted(layout: ILayout) {
    return {
        type: LAYOUT_READ_COMPLETED,
        layout
    }
}

export interface ILayoutReadCompletedAction {
    type: typeof LAYOUT_READ_COMPLETED;
    layout: ILayout;
}

export const USER_PROFILE_READ_COMPLETED = "USER_PROFILE_READ_COMPLETED";
export function userProfileReadCompleted(profile: IUserProfile) {
    return {
        type: USER_PROFILE_READ_COMPLETED,
        profile
    }
}

export interface IUserProfileReadCompletedAction {
    type: typeof USER_PROFILE_READ_COMPLETED;
    profile: IUserProfile;
}

// Export action type aggregations
export type ContextActionTypes = 
    IGroupSelectedAction | 
    ILayoutReadCompletedAction |
    IUserProfileReadCompletedAction;

export type NavigationActionTypes =
    INavItemSelectedAction |
    INavHamburgerClickedAction |
    INavHamburgerMouseEnteredAction |
    INavHamburgerMouseLeftAction |
    INavItemMouseEnteredAction |
    INavItemMouseLeftAction;

export type LayoutActionTypes =
    NavigationActionTypes |
    ContextActionTypes 
