import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex bg-white h-28 justify-between items-center px-12 py-1">
      <span className="font-bold text-4xl">Maktab Sharif</span>
      <div className="flex gap-6 font-bold text-xl items-center ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-900 p-3 text-white rounded"
              : "hover:decoration-2 hover:text-cyan-400"
          }
          to="/"
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-900 p-3 text-white rounded"
              : "hover:decoration-2 hover:text-cyan-400"
          }
          to="/aboutus"
        >
          <p>About Us</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-900 p-3 text-white rounded"
              : "hover:decoration-2 hover:text-cyan-400"
          }
          to="/contactus"
        >
          <p>Contact Us</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-900 p-3 text-white rounded"
              : "hover:decoration-2 hover:text-cyan-400"
          }
          to="/bootcamps"
        >
          <p>Bootcamps</p>
        </NavLink>
      </div>
      <figure className="w-24 h-20">
        <img src="./img/maktabsharif_logo.jfif" alt="maktabsharif" />
      </figure>
    </div>
  );
}
