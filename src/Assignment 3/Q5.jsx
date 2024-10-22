import { useEffect, useState } from "react";
const DynamicInput = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>You entered: {inputValue}</p>
      </div>
    );
  };

  export default DynamicInput;