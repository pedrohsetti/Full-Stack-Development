import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAddTask, showAddTask }) => {
  const location = useLocation();

  return (
    <header>
      <h1>{title}</h1>
        {location.pathname === '/' && (
          <Button 
            color={showAddTask ? 'red' : 'green'} 
            text={showAddTask ? 'Close' : 'Add Task'} 
            onClick={onAddTask}
          />
        )}
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'blue',
//   backgroundColor: 'lightgray',
// }

export default Header;
