"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <div className="relative w-full max-w-sm">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
        <Search className="h-4 w-4" />
      </span>
      <Input type="search" placeholder="Search..." className="pl-10" {...props} />
    </div>
  );
};

export default SearchInput;
