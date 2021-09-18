import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
  SidebarContainer,
} from "./Sidebar";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Biryanis</SidebarLink>
        <SidebarLink to="/">Our Story</SidebarLink>
        <SidebarLink to="/">Mission</SidebarLink>
        <SidebarLink to="/">Join the Cult!</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
        <SidebarRoute to="/">Reserve an Order</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
