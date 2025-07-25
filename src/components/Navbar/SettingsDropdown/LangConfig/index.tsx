'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import settingsStyles from '../styles.module.css';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '@hooks/useLang';
import Image from 'next/image';
import { Text } from '../../../Text';

export const LangConfig = () => {
  const { lang, changeLanguage } = useLang();

  return (
    <DropdownMenu.Sub>
      <div className={settingsStyles.groupLabel}>Idioma</div>
      <DropdownMenu.SubTrigger className={`${settingsStyles.item} ${styles.itemRoot}`}>
        <div className={styles.country}>
          <Image alt='Brazil' src={`/${lang}.svg`} width={20} height={20} />
          <Text asChild><span>{lang}</span></Text>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
      </DropdownMenu.SubTrigger>

      <DropdownMenu.Portal>
        <DropdownMenu.SubContent className={styles.content} sideOffset={6}>
          <DropdownMenu.Item
            className={`${settingsStyles.item} ${styles.country}`}
            onSelect={() => changeLanguage('pt-BR')}
          >
            <Image alt='Brazil' src='/pt-BR.svg' width={20} height={20} />
            <Text asChild><span>Português</span></Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={`${settingsStyles.item} ${styles.country}`}
            onSelect={() => changeLanguage('en-US')}
          >
            <Image alt='US' src='/en-US.svg' width={20} height={20} />
            <Text asChild><span>English</span></Text>
          </DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Sub>
  );
}
