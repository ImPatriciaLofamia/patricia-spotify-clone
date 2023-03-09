interface SvgProps {
    src : string,
    className: string
}
const Svg = ({src, className} : SvgProps) => {
    return(
        <img 
            src={src}
            className={className}
        />
    )
}
export default Svg;