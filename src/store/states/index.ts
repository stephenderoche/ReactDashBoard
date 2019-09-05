import { NavItemType } from "../../components/SidebarNavItem";

export interface IViewTemplate {
    id: string,
    direction: string,
    layoutDefinitions: ILayoutDefinition[],
}

export interface IView {
    id: string;
    direction: string;
    viewLayouts: IViewLayout[]
}

export interface IViewLayout {
    id: string;
    direction: string;
    layoutDefinitions: ILayoutDefinition[];
}

export interface ILayoutDefinition {
    id: string,
    direction?: string,
    width: string,
    height: string,
    items: ILayoutDefinition[],
}

export interface ILayout {
    name: string;
    componentDefinitions: IComponentDefinition[],
    componentRules: IComponentRule[],
    viewTemplates: IViewTemplate[],
}

export interface IComponentDefinition {
    id: string;
    title: string;
    url: string;
}

export interface IComponentRule {
    id: string,
    type: string,
    navItemType: NavItemType,
    targetComponentIds: string[],
    targetTemplateId: string,
}

export interface IUserProfile {
  navigation: {
    isNavCollapsed: boolean,
    isHoveringHamburger: boolean,
    selectedNavItem: NavItemType,
    hoveringNavItem: NavItemType,
  },
  currentLayout: {
    viewTemplate: IViewTemplate,
    components: IComponentDefinition[],
  },
}

export interface IApplicationState {
    navigation: {
        isNavCollapsed: boolean,
        isHoveringHamburger: boolean,
        selectedNavItem: NavItemType,
        hoveringNavItem: NavItemType,
    },
    currentLayout: {
        viewTemplate: IViewTemplate,
        components: IComponentDefinition[],
    },
    layoutDefinition: {
        viewTemplates: IViewTemplate[],
        componentDefinitions: IComponentDefinition[],
        componentRules: IComponentRule[],
    }
}