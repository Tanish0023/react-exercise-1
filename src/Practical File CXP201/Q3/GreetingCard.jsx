function GreetingCard() {
    // Declaring a function inside the component
    const renderGreetingMessage = (name) => {
      return <h1>Hello, {name}!</h1>;
    };
  
    const renderDescription = (message) => {
      return <p>{message}</p>;
    };
  
    return (
      <div className="greeting-card">
        {renderGreetingMessage("Hritvik")}
        {renderDescription("How are you??")}
      </div>
    );
  }
  
  export default GreetingCard;
  