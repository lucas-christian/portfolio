import { Theme } from "@context/ThemeContext/ThemeContext";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDesktop, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from "./styles.module.css"
import settingsStyles from "../styles.module.css"
import { useTheme } from "@hooks/useTheme";

export const ThemeConfig = () => {
  const { theme, setTheme } = useTheme();
  const themes: { themeToSelect: Theme; themeIcon: IconDefinition }[] = [
    { themeToSelect: 'light', themeIcon: faSun },
    { themeToSelect: 'dark', themeIcon: faMoon },
    { themeToSelect: 'system', themeIcon: faDesktop },
  ]

  return (
    <>
      <div className={settingsStyles.groupLabel}>Tema</div>
      <div className={styles.themeRoot}>
        {themes.map((mode) => (
          <DropdownMenu.Item
            key={`theme-dropdown-item-${mode.themeToSelect}`}
            className={`${settingsStyles.item} ${theme === mode.themeToSelect ? styles.actualTheme : ''}`}
            onSelect={() => setTheme(mode.themeToSelect)}
          >
            <FontAwesomeIcon icon={mode.themeIcon} />
          </DropdownMenu.Item>
        ))}
      </div>
    </>
  )
}