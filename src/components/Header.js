import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button
         color={showAdd ? 'pink' : 'green' } 
         text={showAdd ? 'Close' : 'Add'} 
         onClick={onAdd} />
       
    </header>
  )
}

Header.defaultProps = {
    title: 'task Tracker'
  }

  Header.propTypes={
    title:PropTypes.string.isRequired

  }
  

export default Header
