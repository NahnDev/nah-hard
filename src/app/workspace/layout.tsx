import WorkspaceSidebar from "@/modules/workspace/WorkspaceSidebar";

type WorkspaceLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  return (
    <div className="layout grid grid-cols-left">
      <WorkspaceSidebar />
      <main>{children}</main>
    </div>
  );
}
