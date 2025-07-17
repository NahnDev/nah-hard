import { TDepartment } from "@/types/department";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TDepartmentStore = {
  data: TDepartment[];
};

export const useDepartmentStore = create<TDepartmentStore>()(
  persist<TDepartmentStore>(
    (set) => ({
      data: [
        {
          id: "1",
          name: "Development",
          description: "Handles all development tasks",
        },
      ],
    }),
    {
      name: "department-storage",
    }
  )
);
