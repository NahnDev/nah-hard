import { create } from "zustand";
import { TEmployee } from "../../types/employee";
import { persist } from "zustand/middleware";

export type TEmployeeStore = {
  data: TEmployee[];
  createEmployee: (employee: TEmployee) => void;
  updateEmployee: (employee: TEmployee) => void;
  deleteEmployee: (id: TEmployee["id"]) => void;
};
export const useEmployeeStore = create<TEmployeeStore>()(
  persist<TEmployeeStore>(
    (set) => ({
      data: [
        {
          id: "1",
          user: { id: "1", name: "Nahn Dev" },
          department: { id: "1", name: "Development" },
        },
      ],
      createEmployee: (employee) =>
        set((state) => ({
          data: [...state.data, employee],
        })),
      updateEmployee: (employee) =>
        set((state) => ({
          data: state.data.map((e) => (e.id === employee.id ? employee : e)),
        })),
      deleteEmployee: (id) =>
        set((state) => ({
          data: state.data.filter((e) => e.id !== id),
        })),
    }),
    {
      name: "employee-storage",
    }
  )
);
