import type { RouteRecordRaw } from "vue-router";

const MyCardsPage = () => import("@/pages/MyCardsPage.vue");
const MyGoalsPage = () => import("@/pages/MyGoalsPage.vue");
const AddNewGoalPage = () => import("@/pages/AddNewGoalPage.vue");
const AddNewCardPage = () => import("@/pages/AddNewCardPage.vue");
const SettingsPage = () => import("@/pages/SettingsPage.vue");

export const ROUTE_PATHS = {
  myGoals: "/my-goals",
  myCards: "/my-cards",
  newGoal: "/new-goal",
  newCard: "/new-card",
  settings: "/settings",
};

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: ROUTE_PATHS.myGoals,
  },
  {
    path: ROUTE_PATHS.myGoals,
    name: "MyGoals",
    component: MyGoalsPage,
  },
  {
    path: ROUTE_PATHS.myCards,
    name: "MyCards",
    component: MyCardsPage,
  },
  {
    path: ROUTE_PATHS.newGoal,
    name: "AddNewGoal",
    component: AddNewGoalPage,
  },
  {
    path: ROUTE_PATHS.newCard,
    name: "AddNewCard",
    component: AddNewCardPage,
  },
  {
    path: ROUTE_PATHS.settings,
    name: "Settings",
    component: SettingsPage,
  },
];
