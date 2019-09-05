// @ts-ignore
import { defaultFont} from "liquify";
// @ts-ignore
import styled  from 'styled-components';

// TODO:  Get from Liquify
export const defaultColor = '#697A94';
export const selectedColor = '#FFFFFF';
export const hoveringColor = '#4D80F1';
export const defaultBackground = '#DDE2EA';
export const selectedBackground = 'linear-gradient(180deg, #679CF6 0%, #4E81F1 64.7%, #4072EE 100%)';
export const hoveringBackground = '#EBF1FE';

export const StyledIconLabelButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: flex-start
    width: stretch;
    height: 48px;
    padding-left: 20px;
    border-radius: 0px 5px 5px 0px;
    overflow: hidden;
    background: ${(props: { isSelected: boolean, isHovering: boolean }) => (
        props.isSelected ? selectedBackground  : 
        props.isHovering ? hoveringBackground : 'transparent')};
    box-shadow: ${(props: { isSelected: boolean }) => (
        props.isSelected ? '0px 2px 10px #ACB2C1' : 'none')};
    `;

export const StyledIconLabelDiv = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    padding: 2px;
    background: transparent;
`;

export const StyledSpan = styled.span`
    display: flex;
    margin-left: 22px;
    color:  ${(props: {isSelected: boolean, isHovering: boolean }) => (
        props.isSelected ? selectedColor :
        props.isHovering ? hoveringColor : defaultColor)};
    ${defaultFont}
    `;