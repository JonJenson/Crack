import { useState } from "react";

const SideNavAdmin = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "All Crackers", src: "chart_fill" },
    { title: "Orders", src: "User" },
    { title: "Pending Orders", src: "Calendar" },
    { title: "Completed Orders", src: "Search" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-black/80 h-screen p-5 pt-8 relative duration-300 flex flex-col`}
      >
        <img
          src="./control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./firework.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg] w-5 h-5"
            }`}
          />
          <h1
            className={`text-white origin-left font-vt323 text-5xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            DASHBOARD
          </h1>
        </div>
        <ul className="pt-6 flex-1 ">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex hover:bg-black/20 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
            >
              <img src={`./public/${Menu.src}.png`} className="w-5 h-5" />
              <span
                className={`${!open && "  hidden"} origin-left  duration-200`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <li className="flex rounded-md p-2 cursor-pointer  text-red-500 text-4xl hover:bg-red-800 hover:text-white font-vt323  items-center gap-x-4 mt-auto">
          <img src="./public/logout.png" className="w-85 h-8" />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Logout
          </span>
        </li>
      </div>
      <div className="h-screen flex-1 p-7">{/* Content goes here */}</div>
    </div>
  );
};

export default SideNavAdmin;
