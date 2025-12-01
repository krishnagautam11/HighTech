export const Button = ({className, text,...rest }) => {
    return (
        <>
            <button className={`btn ${className} px-4 py-3 `} {...rest}>{text}</button>
            
        </>
    )
}