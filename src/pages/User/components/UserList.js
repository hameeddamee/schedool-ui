import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Table,
} from "reactstrap";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Panel from "../../../shared/components/Panel/Panel";
import PriorityGuage from "./PriorityGuage";

const DropDownMore = ({ user, handleDeleteRow }) => (
  <UncontrolledDropdown className="user__table-more">
    <DropdownToggle>
      <p>
        <DotsHorizontalIcon />
      </p>
    </DropdownToggle>
    <DropdownMenu className="dropdown__menu">
      <Link to={`/user/edit/${user.id}`}>
        <DropdownItem>Edit</DropdownItem>
      </Link>
      <DropdownItem onClick={handleDeleteRow}>Delete</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const UserList = ({ t, users, onDeleteRow }) => (
  <Panel
    xl={6}
    lg={12}
    md={12}
    title={t("user.heading")}
    subhead={t("user.subheading")}
  >
    <Table responsive striped className="user__table">
      <thead>
        <tr>
          <th>Product</th>
          <th>High</th>
          <th>Medium</th>
          <th>Low</th>
          <th>Email</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td className="user__table-title">
              <div className="user__table-img-wrap">
                <div
                  className="user__table-img"
                  style={{ backgroundImage: `url(${user.avatar})` }}
                />
              </div>
              {user.name}
            </td>
            <td>
              <PriorityGuage todos={user.todos} priority="HIGH" />
            </td>
            <td>
              <PriorityGuage todos={user.todos} priority="MEDIUM" />
            </td>
            <td>
              <PriorityGuage todos={user.todos} priority="LOW" />
            </td>
            <td>{user.email}</td>
            <td>
              <DropDownMore
                user={user}
                handleDeleteRow={(e) => onDeleteRow(user, e)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Panel>
);

export default UserList;
