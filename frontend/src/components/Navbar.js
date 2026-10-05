import { Link } from 'react-router-dom'
import logo from '../imegs/logoge.png' // تأكد أن المجلد اسمه images وليس imegs

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="Workout Buddy logo showing a red heart with a white heartbeat line and dumbbells, representing fitness and energy"
          />
          Workout Buddy
        </Link>
      </div>
    </header>
  )
}

export default Navbar
