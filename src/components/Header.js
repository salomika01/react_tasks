import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
const onClick = () => {
    console.log('clik')
}

  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button color='green' text='Heloo' onClick={onClick} />
       
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
