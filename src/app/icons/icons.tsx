import Icon from "./icon";

interface IconComponentProps {
    width?: number | string;
    height?: number | string;

    color?: string;
}

export const LogoutButton:React.FC<IconComponentProps> = ({ width, height, color }) => {
    return( 
    <Icon width={width} height={height} color={color}>
        <path strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3H6.75A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21h6.75a2.25 2.25 0 002.25-2.25V15M18 12H9m0 0l3-3m-3 3l3 3" />
    </Icon>
    );
};