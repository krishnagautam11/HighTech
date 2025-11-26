export const InputField = ({ label, type, inputValue, value, error, placeholderText }) => {

    return (


        <div className="input-fields flex flex-col gap-1">
            <label className="font-medium">{label}</label>
            <input
                type={type}
                value={value}
                onChange={inputValue}
                placeholder={placeholderText}
                className="w-full"
            />
            {error && <p className="error-text">{error}</p>}
        </div>


    )
}