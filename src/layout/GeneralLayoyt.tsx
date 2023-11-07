import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "@hooks/redux";
import { NavBar, SideBar } from ".";
import { TagsModal } from "@/components";
import "react-toastify/dist/ReactToastify.css";

const GenerLayout = () => {
  const { viewEditTagsModal } = useAppSelector((state) => state.modal);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      {viewEditTagsModal && <TagsModal type={"edit"} />}
      <SideBar />
      <div className="app__container">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default GenerLayout;
