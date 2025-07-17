import { Smile } from "lucide-react";

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <div className="size-full grid justify-center items-center">
      <Smile className="w-8 h-8 text-blue-500" />
    </div>
  );
};

export default Page;
