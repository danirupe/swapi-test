import { Link } from 'react-router-dom'
import { BiPlanet } from 'react-icons/bi'

const Logo = (props) => {
  const { name, to } = props

  return (
    <div className='logo'>
      <Link to={to} className='logo__link'>
        <BiPlanet className='logo__icon' />
        {name}
      </Link>
    </div>
  )
}

export default Logo
