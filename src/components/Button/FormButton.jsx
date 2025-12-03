export const FormButton = ({className, text, btnType, submitForm }) => {
    return (
        <>
            <button type={btnType} className={`btn primary-form-button ${className} mt-5 `} onClick={submitForm}>{text}</button>
            
        </>
    )
}