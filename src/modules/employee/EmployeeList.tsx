"use client";

import SearchInput from "@/components/input/SearchInput";
import { Button } from "@/components/ui/button";
import useEmployees from "@/store/employee/employee.hook";
import { PlusCircle } from "lucide-react";

export type EmployeeListProps = {};

const EmployeeList: React.FC<EmployeeListProps> = () => {
  const employees = useEmployees();
  return (
    <div className="grid grid-cols-1">
      <div className="flex flex-row justify-between items-center">
        <h1>Employee List</h1>
        <Button variant="link">
          <PlusCircle />
        </Button>
      </div>
      <nav>
        <SearchInput />
      </nav>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.user.name} - {employee.department.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
