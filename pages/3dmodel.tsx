// components/GLBViewer.tsx
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url }: { url: string }) => {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} />;
};

const GLBViewer = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [modelUrl, setModelUrl] = React.useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setModelUrl(blobUrl);
    }
  };

  return (
    <div style={{ height: '100vh', background: '#111' }}>
      <input
        type="file"
        accept=".glb"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ position: 'absolute', zIndex: 1, margin: 10 }}
      />
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        {modelUrl && <Model url={modelUrl} />}
      </Canvas>
    </div>
  );
};

export default GLBViewer;
