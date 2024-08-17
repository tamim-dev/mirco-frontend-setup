export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /**
   * Show the button as a block (full-width)
   */
  block?: boolean;
  /**
   * Button type
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * Additional className for the button
   */
  className?: string;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The style of the button
   */
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'danger'
    | 'danger-outline'
    | 'link';
  /**
   * How large should the button be?
   */
  size?: 'auto' | 'sm' | 'lg' | 'xl';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
