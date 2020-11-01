import React from "react";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

const SidebarContent = ({ onClick, currentUser }) => {
  const hideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink
          title="Tasks"
          icon="book"
          className="sidebar__link"
          route="/task"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Users"
          route="/user"
          onClick={hideSidebar}
          icon="user"
          className="sidebar__link"
        />
      </ul>
    </div>
  );
};

export default SidebarContent;
