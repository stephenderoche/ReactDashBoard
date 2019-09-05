
import { NavItemType } from "../../components/SidebarNavItem";
import { GROUP_SELECTED, LAYOUT_READ_COMPLETED, LayoutActionTypes, NAV_HAMBURGER_CLICKED, NAV_HAMBURGER_MOUSE_ENTERED, NAV_HAMBURGER_MOUSE_LEFT, NAV_ITEM_MOUSE_ENTERED, NAV_ITEM_MOUSE_LEFT, NAV_ITEM_SELECTED, USER_PROFILE_READ_COMPLETED } from "../actions/index";
import { IApplicationState, IComponentDefinition, IComponentRule, ILayout, IUserProfile, IViewTemplate } from '../states';


const initialState: IApplicationState = {
    navigation: {
        isNavCollapsed: true,
        isHoveringHamburger: false,
        selectedNavItem: NavItemType.Blotter,
        hoveringNavItem: NavItemType.Blotter,
    },
    layoutDefinition: {
        componentDefinitions: [],
        componentRules: [],
        viewTemplates: [],
    },
    currentLayout: {
        components: [
            {
                id: '1',
                title: 'blotter',
                url: 'http://localhost:3001'
            }
        ],
        viewTemplate: {
            id: "blotter",
            direction: "column",
            layoutDefinitions: [
                {
                    id: "1",
                    height: "100%",
                    width: "100%",
                    items: []
                }
            ]
        },
    },
}

export function rootReducer(state = initialState, action: LayoutActionTypes): IApplicationState {
    const { navigation, layoutDefinition } = { ...state };

    switch (action.type) {
        case LAYOUT_READ_COMPLETED:

            const layout: ILayout = action.layout;

            return {
                ...state,
                layoutDefinition: {
                    componentDefinitions: layout.componentDefinitions,
                    componentRules: layout.componentRules,
                    viewTemplates: layout.viewTemplates,
                }
            }
        case USER_PROFILE_READ_COMPLETED:

            const profile: IUserProfile = action.profile;

            return {
                ...state,
                currentLayout: profile.currentLayout,
                navigation: profile.navigation
            }
        case GROUP_SELECTED:
            {
                const components: IComponentDefinition[] = [];
                let viewTemplate: IViewTemplate = { ...state.currentLayout.viewTemplate };
                const groupSelectedRule = layoutDefinition.componentRules.find((componentRule: IComponentRule) => {
                    return (
                        componentRule.type === action.type &&
                        componentRule.navItemType === NavItemType.Blotter
                        // TODO:  align with event publishers && componentRule.sourceId === action.sourceId
                    );
                });

                if (groupSelectedRule) {
                    const currentViewTemplate = layoutDefinition.viewTemplates.find((template: IViewTemplate) => {
                        return template.id === groupSelectedRule.targetTemplateId;
                    });

                    if (currentViewTemplate) {
                        viewTemplate = { ...currentViewTemplate }
                    }

                    const originalComponents = layoutDefinition.componentDefinitions.filter(
                        (component: IComponentDefinition) => groupSelectedRule.targetComponentIds.includes(component.id));

                    // TODO: do not pass the parameter from here. Instead have the app grab it from the context.
                    originalComponents.map((originalComponent: IComponentDefinition) => {
                        const newComponent: IComponentDefinition = {
                            ...originalComponent,
                            url: encodeURI(
                                `${originalComponent.url}/?assetType=${action.assetType}&sourceId=${action.sourceId}`)
                        };
                        components.push(newComponent);
                        return newComponent;
                    });
                }

                return {
                    ...state,
                    currentLayout: {
                        components,
                        viewTemplate
                    }
                }
            }
        case NAV_ITEM_SELECTED:
            {
                let components: IComponentDefinition[] = [];
                let viewTemplate: IViewTemplate = { ...state.currentLayout.viewTemplate };

                const navItemSelectedRule = layoutDefinition.componentRules.find((componentRule: IComponentRule) => {
                    return (
                        componentRule.type === action.type &&
                        componentRule.navItemType === action.navItemType
                    );
                });

                if (navItemSelectedRule) {
                    const navItemViewTemplate: IViewTemplate | undefined = layoutDefinition.viewTemplates.find(
                        (template: IViewTemplate) => {
                            return template.id === navItemSelectedRule.targetTemplateId;
                        });

                    if (navItemViewTemplate) {
                        viewTemplate = { ...navItemViewTemplate }
                    }

                    components = layoutDefinition.componentDefinitions.filter((component: IComponentDefinition) =>
                        navItemSelectedRule.targetComponentIds.includes(component.id));
                }

                return {
                    ...state,
                    currentLayout: {
                        components,
                        viewTemplate
                    },
                    navigation: {
                        ...navigation,
                        selectedNavItem: action.navItemType,
                    }
                }
            }
        case NAV_HAMBURGER_CLICKED:
            return {
                ...state,
                navigation: {
                    ...navigation,
                    isNavCollapsed: !navigation.isNavCollapsed,
                }
            }
        case NAV_HAMBURGER_MOUSE_ENTERED:
            return {
                ...state,
                navigation: {
                    ...navigation,
                    isHoveringHamburger: true,
                },
            }
        case NAV_HAMBURGER_MOUSE_LEFT:
            return {
                ...state,
                navigation: {
                    ...navigation,
                    isHoveringHamburger: false,
                },
            }
        case NAV_ITEM_MOUSE_ENTERED:
            return {
                ...state,
                navigation: {
                    ...navigation,
                    hoveringNavItem: action.navItemType,
                },
            }
        case NAV_ITEM_MOUSE_LEFT:
            return {
                ...state,
                navigation: {
                    ...navigation,
                    hoveringNavItem: state.navigation.selectedNavItem,
                },
            }
    }

    return state;
}