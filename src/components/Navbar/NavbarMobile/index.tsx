import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import { icons } from "../../../constants/pages";
import styles from "./styles.module.css";
import { useNavbar } from "@hooks/useNavbar";
import { useLang } from "@hooks/useLang";

export const NavbarMobile = () => {
  const { handleNavigate } = useNavbar();
  const { t } = useLang();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <FontAwesomeIcon
          icon={faBars}
          className={`${styles.iconMobile} ${styles.sidebarIcon}`}
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.sidebarContent}>
          <Dialog.Title className={styles.sidebarTitle}>
            {t("nav.menu")}
          </Dialog.Title>
          <div className={styles.sidebarHeader}>
            <Dialog.Close asChild>
              <button className={styles.closeButton}>
                <FontAwesomeIcon icon={faX} />
              </button>
            </Dialog.Close>
          </div>
          <nav className={styles.sidebarNav}>
            {icons.map((item) => (
              <div
                key={`sidebar-icon-${item.id}`}
                className={styles.sidebarItem}
                onClick={() => {
                  handleNavigate(item.id);
                }}
              >
                <FontAwesomeIcon icon={item.icon} className={styles.sidebarIconItem} />
                <span>{t(item.label)}</span>
              </div>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}