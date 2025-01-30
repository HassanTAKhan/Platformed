import { Ticket, User } from "./types";
import { daysFromNow } from "./utility";

export const USERS = [
  {
    id: 0,
    name: "Alex Johnson",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 1,
    name: "Jamie Lee",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 2,
    name: "Taylor Morgan",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 3,
    name: "Jordan Smith",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 4,
    name: "Casey Martinez",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 5,
    name: "Drew Taylor",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
  },
] as const satisfies User[];

export const TICKETS = [
  {
    id: 0,
    title: "Fix login page validation errors",
    description:
      "The login form does not display errors for invalid credentials.",
    priority: "medium",
    status: "in-progress",
    dueDate: "2025-01-25",
    assignee: USERS[0],
  },
  {
    id: 1,
    title: "Implement dark mode toggle",
    description: "Add a button to toggle dark mode across the application.",
    priority: "low",
    status: "backlog",
    dueDate: daysFromNow(14),
    assignee: USERS[1],
  },
  {
    id: 2,
    title: "Update API documentation",
    description:
      "Ensure all new endpoints are included in the API documentation.",
    priority: "high",
    status: "triage",
    dueDate: daysFromNow(10),
    assignee: USERS[2],
  },
  {
    id: 3,
    title: "Resolve UI scaling issues on mobile",
    description: "Fix issues with button scaling on smaller screen sizes.",
    priority: "medium",
    status: "done",
    dueDate: daysFromNow(0),
    assignee: USERS[2],
  },
  {
    id: 4,
    title: "Refactor user authentication module",
    description:
      "We did this quickly to ship for the customer, but it needs some love. Improve code readability.",
    status: "done",
    dueDate: daysFromNow(-4),
    assignee: USERS[3],
  },
  {
    id: 5,
    title: "Add unit tests for payment gateway integration",
    priority: "high",
    status: "triage",
    dueDate: daysFromNow(23),
    assignee: USERS[4],
  },
  {
    id: 6,
    title: "Investigate and resolve 500 error on profile update",
    description:
      "500 Internal Server Error occurs when saving changes to the user profile.",
    priority: "high",
    status: "triage",
  },
  {
    id: 7,
    title: "Optimize database queries for dashboard",
    description:
      "Queries on the dashboard page are slow; consider adding indexes or caching.",
    priority: "low",
    status: "in-progress",
    assignee: USERS[5],
  },
  {
    id: 8,
    title: "Add support for attachments in chat",
    description:
      "Users should be able to send images and files in chat messages.",
    status: "backlog",
    dueDate: daysFromNow(45),
  },
  {
    id: 9,
    title: "Update dependencies in package.json",
    description: "Update all dependencies to latest versions.",
    priority: "low",
    status: "backlog",
  },
  {
    id: 10,
    title: "Improve search functionality",
    description:
      "Enhance the search algorithm to handle partial matches and provide suggestions.",
    priority: "medium",
    status: "in-progress",
    dueDate: daysFromNow(7),
    assignee: USERS[0],
  },
  {
    id: 11,
    title: "Implement role-based access control",
    description:
      "Set up role-based permissions for admin, moderator, and user accounts.",
    priority: "high",
    status: "backlog",
    dueDate: daysFromNow(30),
    assignee: USERS[3],
  },
  {
    id: 12,
    title: "Fix broken links in the footer",
    description: "Resolve issues with dead links in the footer of the website.",
    status: "triage",
    dueDate: daysFromNow(5),
    assignee: USERS[4],
  },
  {
    id: 13,
    title: "Redesign dashboard layout",
    description:
      "Update the dashboard UI for a more modern and user-friendly design.",
    status: "in-progress",
    dueDate: daysFromNow(30),
    assignee: USERS[5],
  },
  {
    id: 14,
    title: "Add multi-language support",
    description: "Enable users to switch between languages on the platform.",
    status: "backlog",
    dueDate: daysFromNow(60),
  },
  {
    id: 15,
    title: "Migrate database to cloud provider",
    description:
      "Move the database to a cloud provider for better scalability and reliability.",
    status: "triage",
    dueDate: daysFromNow(45),
    assignee: USERS[2],
  },
] as const satisfies Ticket[];
