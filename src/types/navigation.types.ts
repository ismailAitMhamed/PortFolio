import type { NodeApi } from "react-arborist";

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
  path?: string;
  icon?: 'folder' | 'file';
  metadata?: {
    description?: string;
    tags?: string[];
  };
}

export type NavigationSection = 
  | 'home' 
  | 'formation' 
  | 'experience' 
  | 'projects' 
  | 'skills' 
  | 'contact';

export interface FileExplorerProps {
  onNavigate: (nodeId: string) => void;
  activeNode?: string;
}

export interface FileNodeProps {
  node: NodeApi<TreeNode>;
  style: React.CSSProperties;
  dragHandle?: React.RefObject<HTMLDivElement>;
}