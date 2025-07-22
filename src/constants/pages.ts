import {
  faUser,
  faFolder,
  faTerminal,
  faSuitcase,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const icons = [
  { id: 0, icon: faUser, label: "Arquivo do agente", labelWidth: "90%", page: "/" },
  { id: 1, icon: faTerminal, label: "Habilidades", labelWidth: "85%", page: "/skills" },
  { id: 2, icon: faFolder, label: "Projetos", labelWidth: "80%", page: "/projects" },
  { id: 3, icon: faSuitcase, label: "Experiência Profissional", labelWidth: "92%", page: "/professional-experience" },
  { id: 4, icon: faPhone, label: "Contato", labelWidth: "80%", page: "/contact" }
];