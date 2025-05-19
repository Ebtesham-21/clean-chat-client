interface IconProps {
    width?: number| string;
    height? : number | string;
    color?: string;
    children: React.ReactNode;
}

const Icon:React.FC<IconProps> = ({width = 20, height = 20, color, children}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 58 58" fill={color} xmlns="http://www.w3.org/2000/svg">
            {children}


        </svg>
    )
}

export default Icon