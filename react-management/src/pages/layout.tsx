
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4 flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Centralny System Informacji Publicznej
        </h1>
      </header>
      <main className="flex-grow p-4"> {/* Added flex-grow for main content */}
        <Outlet /> 
      </main>
    </div>
  );
};
