interface BadgeProps {
  label: string;   
  variant?: "default" | "success" | "warning";

}

export const Badge = ({ label }: BadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
      {label}
    </span>
  );
};