export type TCustomForm = {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  options?: { value: string; label: string; disabled?: boolean }[] | undefined;
  mode?: 'multiple' | undefined;
  disabled?: boolean;
};
