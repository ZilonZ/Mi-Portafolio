import { useTheme } from '../../hooks/useTheme';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const { isDark } = useTheme();
  
  const baseStyles = 'px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 active:scale-95';
  
  const variants = {
    primary: isDark
      ? 'bg-primary text-dark-bg hover:shadow-[0_0_20px_rgba(125,249,255,0.6)] border border-primary'
      : 'bg-dark-bg text-light-bg hover:shadow-lg border border-dark-bg hover:border-primary',
    secondary: isDark
      ? 'bg-transparent text-primary border border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(125,249,255,0.4)]'
      : 'bg-transparent text-dark-bg border border-dark-bg hover:bg-dark-bg/10 hover:shadow-lg',
    outline: isDark
      ? 'bg-transparent text-base border border-base/30 hover:border-primary hover:text-primary'
      : 'bg-transparent text-dark-bg border border-dark-bg/20 hover:border-dark-bg hover:text-dark-bg',
    ghost: isDark
      ? 'bg-transparent text-base hover:text-primary'
      : 'bg-transparent text-dark-bg hover:text-primary',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
