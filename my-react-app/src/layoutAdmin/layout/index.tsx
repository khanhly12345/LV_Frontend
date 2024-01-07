import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideNavAdmin from "../../components/SideNavAdmin";

function LayoutAdmin() {
	return (
		<>
			<HeaderAdmin />
			<Outlet />
		</>
	)
}

export default LayoutAdmin;