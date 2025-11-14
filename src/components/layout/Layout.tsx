import React from 'react';
import FileExplorer from '../navigation/FileExplorer';
interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (nodeId: string) => void;
  activeNode: string;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, activeNode }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-300">
      {/* Sidebar - File Explorer */}
      <aside className="w-64 border-r border-gray-800 bg-gray-900 overflow-y-auto">
        <FileExplorer onNavigate={onNavigate} activeNode={activeNode} />
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 overflow-y-auto bg-gray-950">
        {children}
      </main>
    </div>
  );
};

export default Layout;
