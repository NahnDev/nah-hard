import { TUserRef } from "@/types/user";
import { TDepartmentRef } from "./department";

export type TEmployee = {
  id: string;
  user: TUserRef;
  department: TDepartmentRef;
};
