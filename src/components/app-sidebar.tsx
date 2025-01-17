import { ComponentProps, useCallback } from "react";
import ToolSidebar from "./tool-sidebar";
import NodesSidebar from "./nodes-sidebar";
import { Sidebar } from "./ui/sidebar";
import useSelected from "@/hooks/use-selected";
import MessageNodeSidebar from "./message-node-sidebar";
import isMessageNode from "@/lib/isMessageNode";
import { MessageNode } from "@/types/message-node";
import { useReactFlow } from "@xyflow/react";

const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
  const { selectedNode, selectedEdges, onChange } = useSelected();
  const reactFlow = useReactFlow();

  const handleMessageChange = useCallback(
    (node: MessageNode) => {
      console.log("log: nod", node);
      reactFlow.updateNode(node.id, node);
      onChange({ nodes: [node], edges: selectedEdges });
    },
    [onChange, reactFlow, selectedEdges]
  );

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <ToolSidebar />
      {!selectedNode && <NodesSidebar />}
      {isMessageNode(selectedNode) && (
        <MessageNodeSidebar {...selectedNode} onChange={handleMessageChange} />
      )}
    </Sidebar>
  );
};

AppSidebar.displayName = "AppSidebar";

export default AppSidebar;
