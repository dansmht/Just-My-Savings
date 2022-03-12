import type { RouteRecordRaw } from "vue-router";

const MyCardsPage = () => import("@/pages/MyCardsPage.vue");
const MyGoalsPage = () => import("@/pages/MyGoalsPage.vue");
const AddNewGoalPage = () => import("@/pages/AddNewGoalPage.vue");
const AddNewCardPage = () => import("@/pages/AddNewCardPage.vue");
const SettingsPage = () => import("@/pages/SettingsPage.vue");

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/my-goals",
  },
  {
    path: "/my-goals",
    name: "MyGoals",
    component: MyGoalsPage,
  },
  {
    path: "/my-cards",
    name: "MyCards",
    component: MyCardsPage,
  },
  {
    path: "/new-goal",
    name: "AddNewGoal",
    component: AddNewGoalPage,
  },
  {
    path: "/new-card",
    name: "AddNewCard",
    component: AddNewCardPage,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
  },
];
