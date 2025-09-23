import {
  faUser,
  faFolder,
  faTerminal,
  faSuitcase,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const icons = [
  { id: 0, icon: faUser, label: "nav.home", labelWidth: "90%", page: "/" },
  { id: 1, icon: faTerminal, label: "nav.skills", labelWidth: "85%", page: "/skills" },
  { id: 2, icon: faFolder, label: "nav.projects", labelWidth: "80%", page: "/projects" },
  { id: 3, icon: faSuitcase, label: "nav.professional-experience", labelWidth: "92%", page: "/professional-experience" },
  { id: 4, icon: faPhone, label: "nav.contact", labelWidth: "80%", page: "/contact" }
];