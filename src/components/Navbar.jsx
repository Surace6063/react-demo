import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useAuth } from "../hooks/useAuth";
import { useUserStore } from "../zustand/authStore";

const Navbar = () => {
  const dispatch = useDispatch()

  // const {quantity} = useContext(CartContext)
  const { quantity } = useSelector((state) => state.cart);

  // accessing user state from auth slice
  // const { user } = useAuth()

  // accessing user state from zustand -> authStore
  const {user,clearUser} = useUserStore()


  console.log(user);

  // handle logout function
  const handleLogout = () => {
    //  dispatch(logout())
    clearUser()
  }

  return (
    <div className="border-b border-slate-300 py-4">
      <div className="flex justify-between items-center container">
        {/* logo */}
        <h1 className="text-slate-800 font-bold text-2xl">E-Store</h1>

        {/* navlinks */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/products">
            <li>Products</li>
          </Link>

          <li>Contact</li>
          <li>About</li>
        </ul>

        {/* buttons */}
        <div className="flex gap-6 items-center">
          {user ? (
            <button onClick={handleLogout} className="outline_button">logout</button>
          ) : (
            <div className="space-x-4">
              <button className="primary_button">Register</button>
              <Link to="/login">
                <button className="outline_button">login</button>
              </Link>
            </div>
          )}
          <Link to="/cart">
            <div className="flex items-center gap-0.5 text-gray-600">
            <FaCartShopping size={25} />
            <span className="text-xl">({quantity})</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

