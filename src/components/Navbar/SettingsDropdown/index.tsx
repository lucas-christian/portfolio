'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import styles from './styles.module.css';
import { ThemeConfig } from './ThemeConfig';
import { LangConfig } from './LangConfig';

export const SettingsDropdown = ({ children }: { children: ReactNode; }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={styles.content} sideOffset={5} side='left' align='end'>
        <ThemeConfig />
        <div className={styles.separator} />
        <LangConfig />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
