import React from 'react';
import { NodeRendererProps } from 'react-arborist';
import { File, ChevronRight, ChevronDown } from 'lucide-react';
import type { TreeNode } from '../../types/navigation.types';

const FileNode: React.FC<NodeRendererProps<TreeNode>> = ({ 
  node, 
  style,
  dragHandle 
}) => {
  const hasChildren = node.data.children && node.data.children.length > 0;

  const getFolderIcon = () => (
    node.isOpen ? (
     <i className="fa-solid fa-folder-open text-yellow-500" />
    ) : (
      <i className="fa-solid fa-folder text-yellow-500 ml-1"></i>
    )
  );

  return (
    <div 
      style={style}
      ref={dragHandle}
      className={`
        flex items-center px-2 py-1.5 
        cursor-pointer select-none
        transition-colors duration-150 ease-in-out
        rounded-md
        ${node.isSelected 
          ? 'bg-blue-600/90 text-white' 
          : 'text-gray-300 hover:bg-gray-700/50'
        }
      `}
      onClick={() => {
        if (hasChildren) {
          node.toggle();
        }
        node.select();
      }}
    >
      <div className="flex items-center gap-2 w-full">
        {hasChildren ? (
          <>
            <span className="flex-shrink-0 flex items-center">
              {node.isOpen ? (
                <ChevronDown size={16} className="text-gray-400" />
              ) : (
                <ChevronRight size={16} className="text-gray-400" />
              )}
              {getFolderIcon()}
            </span>
          </>
        ) : (
          <span className="flex-shrink-0 flex items-center ml-5">
            <File size={16} className="text-blue-400" />
          </span>
        )}
        <span className={`
          text-sm font-mono truncate
          ${node.isSelected ? 'font-medium' : 'font-normal'}
        `}>
          {node.data.name}
        </span>
      </div>
    </div>
  );
};

export default FileNode;