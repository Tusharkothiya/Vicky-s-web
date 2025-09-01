import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Fixed at top) */}
      <Header />

      {/* Main Content (with padding to avoid overlap) */}
      <main className="flex-1 mt-16 mb-16 overflow-auto">
        <div className="container mx-auto p-4">
          <Outlet /> {/* Renders nested routes here */}
        </div>
      </main>

      {/* Footer (Fixed at bottom) */}
      <Footer />
    </div>
  );
};

export default MainLayout;
