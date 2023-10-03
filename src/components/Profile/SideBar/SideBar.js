import "./SideBar.css";
import avatar from "../../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="sidebar__avatar" src={avatar} alt="Avatar icon" />
      </div>
      <p className="sidebar__name">John Rojas</p>
    </div>
  );
};

export default SideBar;
