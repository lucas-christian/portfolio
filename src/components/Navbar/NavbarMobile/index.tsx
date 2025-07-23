import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import { icons } from "../../../constants/pages";
import styles from "./styles.module.css";
import { useNavbar } from "@hooks/useNavbar";

export const NavbarMobile = () => {
  const { handleNavigate } = useNavbar();
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
            Menu
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
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}