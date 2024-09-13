import React from "react";
import CardComponent from "../Card/CardComponent";
import "./KanbanBoard.css";

const priorityLabels = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

const priorityLogos = {
  0: "./src/assets/No-priority.svg",
  1: "./src/assets/Img - Low Priority.svg",
  2: "./src/assets/Img - Medium Priority.svg",
  3: "./src/assets/Img - High Priority.svg",
  4: "./src/assets/SVG - Urgent Priority Colour.svg",
};

const getGroupLogo = (group, groupingOption) => {
  const logos = {
    "Todo": "./src/assets/To-do.svg",
    "In progress": "./src/assets/in-progress.svg",
    "Backlog": "./src/assets/Backlog.svg",
    "Done": "./src/assets/Done.svg",
    "default": "./src/assets/down.svg",
  };

  if (groupingOption === "status") {
    return logos[group] || logos["default"];
  }

  if (groupingOption === "priority") {
    return priorityLogos[group] || logos["default"];
  }

  return logos["default"];
};

const KanbanBoard = ({ tickets, users, groupingOption, sortOption }) => {
  const groupTickets = (tickets) => {
    return tickets.reduce((grouped, ticket) => {
      const key = ticket[groupingOption];
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(ticket);
      return grouped;
    }, {});
  };

  const sortTickets = (tickets) => {
    if (sortOption === "priority") {
      return tickets.sort((a, b) => b.priority - a.priority);
    }
    return tickets.sort((a, b) => a.title.localeCompare(b.title));
  };

  const getUserName = (userId) => {
    if (!userId) return "Unknown User";
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  const groupedTickets = groupTickets(tickets);
  const sortedGroupedTickets = Object.keys(groupedTickets).reduce(
    (sortedGroups, group) => {
      sortedGroups[group] = sortTickets(groupedTickets[group]);
      return sortedGroups;
    },
    {}
  );

  return (
    <div className="kanban-board">
      {Object.keys(sortedGroupedTickets).map((group) => (
        <div className="kanban-column" key={group}>
          <div className="kanban-header">
            <div className="kanban-header-title">
              <img
                src={getGroupLogo(group, groupingOption)}
                alt="group logo"
                className="kanban-logo"
              />
              <h3 className="kanban-title">
                {groupingOption === "userId"
                  ? getUserName(group)
                  : groupingOption === "priority"
                  ? priorityLabels[group]
                  : group}
              </h3>
              <div className="kanban-ticket-count">
                {groupedTickets[group].length}
              </div>
            </div>
            <div className="kanban-header-icons">
              <img
                src="./src/assets/add.svg"
                alt="add"
                className="kanban-icon"
              />
              <img
                src="./src/assets/3 dot menu.svg"
                alt="menu"
                className="kanban-icon"
              />
            </div>
          </div>

          <div className="kanban-task-list">
            {sortedGroupedTickets[group].map((ticket) => (
              <CardComponent key={ticket.id} ticket={ticket} users={users} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
