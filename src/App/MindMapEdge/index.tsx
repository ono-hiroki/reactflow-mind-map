import { Handle, NodeProps, Position } from 'reactflow';

import useStore from '../store';

export type NodeData = {
    label: string;
};

function MindMapNode({ id, data }: NodeProps<NodeData>) {
    const updateNodeLabel = useStore((state) => state.updateNodeLabel);

    return (
        <>
            <input
                // from now on we can use value instead of defaultValue
                // this makes sure that the input always shows the current label of the node
                value={data.label}
                onChange={(evt) => updateNodeLabel(id, evt.target.value)}
                className="input"
            />

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Top} />
        </>
    );
}

export default MindMapNode;