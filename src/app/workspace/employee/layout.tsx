import EmployeeList from "@/modules/employee/EmployeeList";

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-left">
      <EmployeeList />
      {children}
    </div>
  );
}
