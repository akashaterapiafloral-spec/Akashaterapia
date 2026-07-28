import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 24 }: LucideIconProps) {
  // Safe mapping of name to Lucide Icons
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Fallback to Sparkles icon if not found
    return <Icons.Sparkles className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}
