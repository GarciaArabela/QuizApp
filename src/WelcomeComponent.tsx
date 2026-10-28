type WelcomeComponentProps = {
  onStart: () => void;
};

function WelcomeComponent({ onStart }: WelcomeComponentProps) {
  return (
    <div className="welcome-container">
      <p className="welcome-small">Welcome to the</p>
      <h1 className="welcome-title">Frontend Quiz!</h1>
      <button className="btn" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default WelcomeComponent;