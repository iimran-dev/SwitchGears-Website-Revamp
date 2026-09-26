import "lucide-react";

declare module "lucide-react" {
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
}
