import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="h-6 w-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutButton;

// starter code for logout button

// function LogoutButton() {
//   return (
//     <div className="mt-auto">
//       <BiLogOut className="h-6 w-6 text-white cursor-pointer" />
//     </div>
//   );
// }

// export default LogoutButton;
