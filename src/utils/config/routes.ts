import { IRoute } from "../types/Route";
import { Home, Time } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "time",
    path: "/time",
    exact: true,
    component: Time,
  },
];
