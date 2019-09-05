// @ts-ignore
import styled  from 'styled-components';

// TODO:  Get from Liquify or pass as props
 export const defaultColor = '#697A94';
 export const selectedColor = '#FFFFFF';
 export const hoveringColor = '#4D80F1';
 export const focusColor = '#4D80F1';
 export const defaultBackground = '#DDE2EA';
 export const downBackground = 'linear-gradient(180deg, #679CF6 0%, #4E81F1 64.7%, #4072EE 100%)';
 export const selectedBackground = 'linear-gradient(180deg, #679CF6 0%, #4E81F1 64.7%, #4072EE 100%)';
 export const hoveringBackground = '#EBF1FE';
 export const focusBackground = '#D5E1FC';

export const collapsedWidth =  '64px';
export const expandedWidth = '224px';
export const iconSize = '20';   

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    width: ${collapsedWidth}
    height: 100%
    background-color: ${defaultBackground};
    justify-content: space-between;
    align-items: left;
    width: ${(props: { isNavCollapsed: boolean }) => (props.isNavCollapsed ? collapsedWidth : expandedWidth)};
    &:hover {
         width: ${expandedWidth}
         position:${(props: { isNavCollapsed: boolean; }) => (props.isNavCollapsed ? 'fixed' : 'static')};
         box-shadow: 0px 8px 16px #EBEBEC, 0px 4px 8px rgba(176, 190, 197, 0.24);
    } 
`;

export const StyledStandaloneIconButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: flex-start
    width: 64px;
    height: 48px;
    padding-left: 14px;
    border-radius: 0px 5px 5px 0px;
    overflow: hidden;
   `;

export const StyledIconDiv = styled.div`
    display: flex;
    width: 36px;
    height: 36px;
    padding: 8px;
    border-radius: 4px;
    background: ${(props: { isHovering: boolean }) => (
        props.isHovering ? hoveringBackground : 'transparent')};
`;

export const StyledTopDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const StyledBottomDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 16px;
`;

export const StyledSpacerDiv = styled.div`
    display:flex;
    width: ${(props: { isNavCollapsed: boolean }) => (props.isNavCollapsed ? collapsedWidth : expandedWidth)};
    height: 32px;
    background: transparent;
`;