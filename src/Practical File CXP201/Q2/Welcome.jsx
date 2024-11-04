export default function WelcomeMessage() {
    const name = "Abhishek";
    return (
      <div>
        <h1 className="welcome-message">Welcome {name}!</h1>
        <h2>{`Hello, ${name}. Have a wonderful day!`}</h2>
      </div>
    );
  }
  