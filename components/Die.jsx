export default function Die(props) {
  const buttonClass = props.isHeld ? "die-active" : "die-inactive";
  return (
    <>
      <button
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value}, 
        ${props.isHeld ? "held" : "not held"}`}
        className={buttonClass}
        onClick={() => props.hold(props.id)}
      >
        {props.value}
      </button>
    </>
  );
}
