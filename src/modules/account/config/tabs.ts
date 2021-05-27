import { TabOptionsConfig } from "@/shared/types/config/tab-options-config";

const tabs: TabOptionsConfig = {
  currentOption: {
    name: "games",
    isPrevious: false,
  },
  options: [
    {
      name: "games",
      text: "Mis desafíos",
      icon: "",
    },
    {
      name: "match",
      text: "Partidas jugadas",
      icon: "",
    },
    {
      name: "friends",
      text: "Amigos (250)",
      icon: "",
    },
  ],
};

export { tabs };
