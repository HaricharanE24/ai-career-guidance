
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  // Check if OpenAI API key is set
  const isApiKeyMissing = !import.meta.env.VITE_OPENAI_API_KEY;
  
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background to-accent/10">
      <Header />
      {isApiKeyMissing && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a1 1 0 01-1 1 1 1 0 110-2 1 1 0 011 1zm-1 3a1 1 0 00-1 1v3a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                OpenAI API key is not set. Add <strong>VITE_OPENAI_API_KEY</strong> to your environment variables for full AI chat functionality.
              </p>
            </div>
          </div>
        </div>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
