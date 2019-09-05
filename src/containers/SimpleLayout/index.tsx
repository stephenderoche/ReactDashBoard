// @ts-ignore
import { EmbeddedView } from 'liquify';
import React from 'react';
import { connect } from 'react-redux';
import { IApplicationState, IComponentDefinition, ILayoutDefinition, IViewTemplate } from '../../store/states';
import SidebarNav from '../SidebarNav';
import { StyledDiv, StyledEmbeddedViewDiv, StyledViewDiv, StyledViewLayoutDiv, StyledViewTemplateDiv } from './styles';

interface ISimpleLayoutProps {
    components: IComponentDefinition[],
    viewTemplate: IViewTemplate,
}

class SimpleLayout extends React.Component<ISimpleLayoutProps, {}> {

    private itemIndex: number = -1;

    onItemFound = (item: ILayoutDefinition) => {
        this.itemIndex += 1;

        const component = this.props.components[this.itemIndex];
        return (
            <StyledViewDiv>
                <StyledEmbeddedViewDiv height={item.height} width={item.width} key={this.itemIndex}>
                    <EmbeddedView title={component ? component.title : ''} url={component ? component.url : ''} />
                </StyledEmbeddedViewDiv>
            </StyledViewDiv>
        );
    }

    onContainerFound = (container: ILayoutDefinition) => {
        return (
            <StyledViewLayoutDiv
                key={container.id}
                direction={container.direction}>
                {this.buildLayout(
                    container.items,
                    () => this.onItemFound,
                    () => this.onContainerFound)}
            </StyledViewLayoutDiv>
        );
    }

   buildLayout = (layoutDefinitions: ILayoutDefinition[], onItemFound: () => any, onContainerFound: () => any) => {
        return (
            <React.Fragment>
                {layoutDefinitions.map((layoutDefinition: ILayoutDefinition) => {
                    if (layoutDefinition.items.length === 0) {
                        return onItemFound()(layoutDefinition);
                    }
                    
                    return onContainerFound()(layoutDefinition);
                })}
            </React.Fragment >
        );
    }

    render() {
        this.itemIndex = -1;
        return (
            <StyledDiv>
                <SidebarNav/>
                <StyledViewTemplateDiv direction={this.props.viewTemplate.direction}>
                    {this.buildLayout(
                        this.props.viewTemplate.layoutDefinitions,
                        () => this.onItemFound,
                        () => this.onContainerFound)}
                </StyledViewTemplateDiv>
            </StyledDiv>
        );
    }
}

const mapStateToProps = (state: IApplicationState) => {
    return {
        viewTemplate: state.currentLayout.viewTemplate,
        components: state.currentLayout.components,
    };
};

export default connect(mapStateToProps)(SimpleLayout);