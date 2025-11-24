export const Button = ({className, text }) => {
    return (
        <>
            <button className={`btn ${className} px-4 py-3 `}>{text}</button>
            
        </>
    )
}