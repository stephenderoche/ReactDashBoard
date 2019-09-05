// @ts-ignore
import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    // flex-direction: row;
    // flex-wrap: nowrap;
    // justify-content: flex-start;
    // align-items: stretch;
    // align-content: stretch;
    background: #DDE2EA;
    height: 100%;
    width: 100%;
`;

export const StyledViewDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export const StyledViewTemplateDiv = styled.div`
    display: flex;
    flex-direction: ${(props: { direction: string; }) => (props.direction)};
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

`;

export const StyledViewLayoutDiv = styled.div`
    display: flex;
    flex-direction:  ${(props: { direction: string; }) => (props.direction)};
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

`;

export const StyledEmbeddedViewDiv = styled.div`
    // display: 'flex';
    flex: 1 1 auto;
    width: ${(props: { width: string; }) => (props.width)};
    height: ${(props: { height: string; }) => (props.height)};
`;