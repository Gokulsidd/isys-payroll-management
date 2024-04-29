import Sidebar from "@/components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-full dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary to-black">
            <Sidebar />
            <div className="p-2 px-4 w-full h-[100vh] overflow-y-scroll">{children}</div>
        </div>
    );
};

export default Layout;
