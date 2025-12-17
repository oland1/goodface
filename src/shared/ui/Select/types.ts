export interface SelectItem {
  id: string | number;
  label: string;
  icon?: string;
}

export interface SelectProps<T extends SelectItem> {
  label?: string;
  selectedValue: T | null;
  options: T[];
  onSelect: (value: T) => void;
}

export interface SelectOptionProps<T extends SelectItem> {
  data: T;
  isSelected: boolean;
  onSelect: (value: T) => void;
}