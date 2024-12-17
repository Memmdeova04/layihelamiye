import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

 
  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  };


  const handleChange = (delta) => {
    const newValue = count + delta;
    if (newValue >= -10 && newValue <= 10) {
      setCount(newValue);
      changeBackgroundColor();
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => handleChange(-1)}>
        -
      </button>
      <span style={styles.counterValue}>{count}</span>
      <button style={styles.button} onClick={() => handleChange(1)}>
        +
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    borderRadius: "1px",
  
  },
  button: {
    fontSize: "70px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "70px",
    margin: "20px",
    cursor: "pointer",
    
    transition: "background-color 0.3s",
  },
  counterValue: {
    fontSize: "30px",
    fontWeight: "bold",
  },
};

export default Counter;
