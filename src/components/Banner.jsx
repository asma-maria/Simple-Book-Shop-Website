import { NavLink } from "react-router-dom";
import brimg from "../images/brimg.jpg";

export default function Banner() {
  return (
    <div>

<div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={brimg}
      className="max-w-sm rounded-lg shadow-2xl mx-auto" />
    <div>
      <h4 className="py-8 text-3xl  text-red-950">
       Unlock a World of Stories – Find Your Next Favorite Book at <span className=" font-serif font-bold  ">Book Club</span>
      </h4>
     <NavLink to="/books" className="btn btn-outline btn-accent">Buy Book </NavLink>
    </div>
  </div>
</div>
    </div>
  )
}
