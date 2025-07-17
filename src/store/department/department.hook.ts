import { useDepartmentStore } from "./department.store";

export function useDepartments() {
  return useDepartmentStore((state) => state.data);
}
