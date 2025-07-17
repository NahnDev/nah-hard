import { useStore } from "zustand";
import { useEmployeeStore } from "./employee.store";

export default function useEmployees() {
  return useEmployeeStore((state) => state.data);
}
