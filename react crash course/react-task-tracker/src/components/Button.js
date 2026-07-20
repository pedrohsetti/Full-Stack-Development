import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
        {text}
    </button>
}

Button.defaultProps = {
    color: 'steelblue',
    onClick: () => {},
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
}

export default Button
