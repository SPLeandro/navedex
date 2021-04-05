function Input ({type, label, placeholder, value, onChange, width = "280px"}) {
    
    return (
        <div className="Input" style={{width:width}}>
            <label>{label}</label>
            <input 
                type={type || "text"} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}             
            />
        </div>
    )
}

export default Input;