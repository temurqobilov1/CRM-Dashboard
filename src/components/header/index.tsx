import { NavLink, Outlet } from "react-router-dom";

function Header({ children }: { children?: React.ReactNode }) {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[17px] px-3 py-2 rounded-md hover:bg-orange-100 transition ${
      isActive ? " border-orange-400 bg-orange-200" : ""
    }`;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-[250px] bg-white shadow-md border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0 h-screen p-6">
        <div className="flex flex-col gap-6 overflow-y-auto">
          <div>
            <h2 className="text-xl font-bold mb-3 text-orange-600">Dashboard</h2>
            <div className="flex flex-col gap-1">
              <NavLink className={linkClass} to={"/"}>
                Home
              </NavLink>
              <NavLink className={linkClass} to={"/menegers"}>
                Menegers
              </NavLink>
              <NavLink className={linkClass} to={"/admins"}>
                Admins
              </NavLink>
              <NavLink className={linkClass} to={"/teachers"}>
                Teachers
              </NavLink>
              <NavLink className={linkClass} to={"/students"}>
                Students
              </NavLink>
              <NavLink className={linkClass} to={"/courses"}>
                Courses
              </NavLink>
              
              <button
                className="text-[17px] mt-5 text-red-600 px-3 py-2 border rounded-md hover:bg-red-300 transition cursor-pointer"
                onClick={logOut}
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 ml-[250px] flex flex-col">
        <nav className="h-[60px] bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard CRM</h2>
          <div className="text-gray-700 font-medium">
            {user ? `${user.first_name} ${user.last_name}` : "User"}
          </div>
        </nav>

        <main className="flex-1 p-6 overflow-y-auto">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}

export default Header;
