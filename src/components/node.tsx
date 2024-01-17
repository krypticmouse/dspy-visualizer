import React from 'react';
import { Handle, Position } from 'reactflow';

const SignatureNode = () => {
  return (
    <div className="border-2 border-gray-300 bg-white rounded p-4">
      <Handle type="target" position={Position.Top} style={{ borderRadius: 0 }} />
      
      <div className="flex flex-col">
        <div className="font-bold">Instruction</div>
        <div className="flex mb-1">
          <input className="mr-1 p-1 border border-gray-400 rounded" placeholder="Enter Instruction" />
        </div>

        <hr className="my-3 border-1 rounded" />

        <div className="font-bold">Inputs</div>
        <div className="flex mb-1">
          <input className="mr-1 p-1 border border-gray-400 rounded" placeholder="desc" />
          <input className="mr-1 p-1 border border-gray-400 rounded" placeholder="prefix" />
        </div>
        <div className="cursor-pointer text-center my-1 mx-full bg-gray-100 rounded">+</div>

        <hr className="my-3 border-1 rounded" />

        <div className="font-bold">Outputs</div>
        <div className="flex mb-1">
          <input className="mr-1 p-1 border border-gray-400 rounded" placeholder="desc" />
          <input className="mr-1 p-1 border border-gray-400 rounded" placeholder="prefix" />
        </div>
        <div className="cursor-pointer text-center my-1 mx-full bg-gray-100 rounded">+</div>
      </div>
      
      <Handle type="source" position={Position.Bottom} style={{ borderRadius: 0 }} />
    </div>
  );
};

export default SignatureNode;
