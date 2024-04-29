import Navbar from "@/components/navbar";

const Dashboard = () => {
    return ( 
        <div className="p-2">
            <Navbar />
            <div className="grid grid-flow-row grid-rows-2">
            <section className="flex items-center gap-x-4 ">
                <div className="flex flex-col gap-y-2  w-full ">
                    <h1 className="text-xl font-semibold pl-1">Timecard</h1>
                    <div className="flex flex-col gap-y-2 p-2 rounded-md border border-gray-200 h-[250px] shadow-md">
                    <div>this is card</div>
                    <div>this is card</div>
                    <div>this is card</div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2  w-full ">
                    <h1 className="text-xl font-semibold pl-1">Projects</h1>
                    <div className="flex flex-col gap-y-2 p-2 rounded-md border border-gray-200 h-[250px] shadow-md">
                    <div>this is card</div>
                    <div>this is card</div>
                    </div>
                </div>
            </section>
            <section className="flex items-center gap-x-4">
                <div className="flex flex-col gap-y-2 h-[250px] w-full p-2 rounded-md border border-gray-200 shadow-md">this is card</div>
                <div className="flex flex-col gap-y-2 h-[250px] w-full p-2 rounded-md border border-gray-200 shadow-md">this is card</div>
                <div className="flex flex-col gap-y-2 h-[250px] w-full p-2 rounded-md border border-gray-200 shadow-md">this is card</div>
            </section>
            </div>
            
        </div>
     );
}
 
export default Dashboard;