'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const Select = ({ value, onChange }: { value?: string; onChange?: (value: string) => void; }) => {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onChange}>
      <SelectPrimitive.Trigger className={styles.trigger}>
        <SelectPrimitive.Value placeholder="Selecione uma opção" />
        <SelectPrimitive.Icon>
          <FontAwesomeIcon icon={faChevronDown} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={styles.content}>
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item className={styles.item} value="opcao1">
              <SelectPrimitive.ItemText>Opção 1</SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
            <SelectPrimitive.Item className={styles.item} value="opcao2">
              <SelectPrimitive.ItemText>Opção 2</SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
            <SelectPrimitive.Item className={styles.item} value="opcao3">
              <SelectPrimitive.ItemText>Opção 3</SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
