import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Fixed at top) */}
      <Header />

      {/* Main Content (with padding to avoid overlap) */}
      <main className="flex-1 overflow-auto">
        <div className=" mx-auto p-0">
          <Outlet /> {/* Renders nested routes here */}
        </div>
      </main>

      {/* Footer (Fixed at bottom) */}
      <Footer />
    </div>
  );
};

export default MainLayout;
