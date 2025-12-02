import React from 'react';
import { NodeRendererProps } from 'react-arborist';
import { File, ChevronRight, ChevronDown } from 'lucide-react';
import type { TreeNode } from '../../types/navigation.types';

const alwaysFolders = ["profile", "contact"];

const FileNode: React.FC<NodeRendererProps<TreeNode>> = ({ 
  node, 
  style,
  dragHandle 
}) => {
  const hasChildren = (node.data.children && node.data.children.length > 0);
  const isFolder = hasChildren || alwaysFolders.includes(node.data.id);

  const getFolderIcon = () => (
    node.isOpen ? (
      <i className="fa-solid fa-folder-open text-yellow-500 text-2xl" />
    ) : (
      <i className="fa-solid fa-folder text-yellow-500 text-2xl ml-2" />
    )
  );

  return (
    <div 
      style={{ ...style, fontSize: '1.1rem', minHeight: 50 }} 
      ref={dragHandle}
      className={`
        flex items-center px-4 py-3 
        cursor-pointer select-none
        transition-colors duration-150 ease-in-out
        rounded-lg
        ${node.isSelected 
          ? 'bg-blue-600/90 text-white shadow-lg' 
          : 'text-gray-300 hover:bg-gray-700/40'
        }
      `}
      onClick={() => {
        if (isFolder) {
          node.toggle();
        }
        node.select();
      }}
    >
      
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div className="flex items-center gap-6 w-full">
        {isFolder ? (
          <>
            <span className="flex-shrink-0 flex items-center gap-1">
              {node.isOpen ? (
                <ChevronDown size={22} className="text-gray-400" />
              ) : (
                <ChevronRight size={22} className="text-gray-400" />
              )}
              {getFolderIcon()}
            </span>
          </>
        ) : (
          <span className="flex-shrink-0 flex items-center ml-7">
            <i className="fa-brands fa-react text-2xl" style={{ color: '#74C0FC' }}></i>
          </span>
        )}
        <span className={` text-lg
       font-mono truncate
          ${node.isSelected ? 'font-semibold' : 'font-normal'}
        `}>
          {node.data.name}
        </span>
      </div>
    </div>
  );
};

export default FileNode;
