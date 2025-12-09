import { Task } from "@/context/taskContext";
import {v4 as uuid} from "uuid"

export const mockTasks: Task[] = [
  {
    id: uuid(),
    title: "Design login page",
    description: "Create UI for login screen and responsive state.",
    status: "todo",
    createdAt: new Date().toISOString(),
  },
  {
    id: uuid(),
    title: "Setup routing",
    description: "Add page routing using Next.js App Router.",
    status: "in-progress",
    createdAt: new Date().toISOString(),
  },
  {
    id: uuid(),
    title: "Create Auth Context",
    description: "Prepare authentication layer for future Nest backend.",
    status: "done",
    createdAt: new Date().toISOString(),
  },
  {
    id: uuid(),
    title: "Learn Nest.js",
    description: "Learn Nest.js to integrate with frontend.",
    status: "done",
    createdAt: new Date().toISOString(),
  },
  {
    id: uuid(),
    title: "Gsap animation",
    description: "Animate website to impress.",
    status: "todo",
    createdAt: new Date().toISOString(),
  },
];