import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container mx-auto px-4">
        <Header />
        <Outlet />
      </main>
      <div className="p-9 text-lg text-center bg-gray-800 mt-10">
        Thanks For Visiting 💗
      </div>
    </div>
  );
}

export default AppLayout;
