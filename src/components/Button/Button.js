import { useNavigate } from "react-router-dom";
import "./Button.scss";
import "../../theme.scss";

const Button = ({ modifiers, children, path }) => {
  const modifierClasses = {
    secondary: "Button_secondary",
    nav: "Button_nav",
    landing: "Button_landing",
    heading: "Button_heading",
    outline: "Button_outline",
  };

  let buttonClass = "Button";

  modifiers.map((modifier) => (buttonClass += " " + modifierClasses[modifier]));

  let navigate = useNavigate();

  return (
    <button onClick={() => navigate(path)} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
