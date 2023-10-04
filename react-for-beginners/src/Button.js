import PropTypes from "prop-types";
import BtnModule from "./Button.module.css";

function Button({text}) {
    return <button className={BtnModule.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;