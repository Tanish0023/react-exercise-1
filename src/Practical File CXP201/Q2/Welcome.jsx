export default function WelcomeMessage() {
    const name = "John";
    return (
      <div>
        <h1 className="welcome-message">Welcome {name}!</h1>
        <p>{`Hello, ${name}. Have a great day!`}</p>
      </div>
    );
  }
  