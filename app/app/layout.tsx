import Sidebar from "@/components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-full">
            <Sidebar />
            <div className="p-2 px-4 w-full h-[100vh] overflow-y-scroll">{children}</div>
        </div>
    );
};

export default Layout;
