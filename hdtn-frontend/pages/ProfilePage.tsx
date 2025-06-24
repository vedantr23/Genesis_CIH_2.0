import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";

// Avatar loader
const AvatarModel: React.FC<{ url: string }> = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} position={[0, -1.7, 0]} />;
};

// LocalStorage keys
const STORAGE_KEY = "hdtn_profile";

const ProfilePage: React.FC = () => {
  // Form state
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(
    "https://models.readyplayer.me/64d8128a8f5e560019189515.glb"
  );

  // Load from localStorage on first load
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const profile = JSON.parse(saved);
      setName(profile.name || "");
      setSkills(profile.skills || "");
      setBio(profile.bio || "");
      setAvatarUrl(profile.avatarUrl || "");
    }
  }, []);

  // Save to localStorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profile = { name, skills, bio, avatarUrl };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    alert("Profile saved locally!");
  };

  return (
    <div className="p-6 bg-slate-800 min-h-screen text-white">
      <h1 className="text-3xl text-cyan-400 font-bold mb-6">Edit Profile</h1>

      {/* Avatar Viewer */}
      <div className="bg-slate-700 rounded-md mb-6" style={{ height: "400px" }}>
        <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
          <Suspense
            fallback={
              <Html center>
                <div className="text-white text-lg">Loading Avatar...</div>
              </Html>
            }
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} />
            <Environment preset="city" />
            <AvatarModel url={avatarUrl} />
          </Suspense>
          <OrbitControls enableZoom enablePan target={[0, -0.5, 0]} />
        </Canvas>
      </div>

      {/* Editable Fields */}
      <form onSubmit={handleSubmit} className="bg-slate-700 p-4 rounded">
        <label className="block text-cyan-300 font-semibold mb-1">Name:</label>
        <input
          className="w-full p-2 mb-3 rounded bg-slate-600 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-cyan-300 font-semibold mb-1">
          Skills (comma-separated):
        </label>
        <input
          className="w-full p-2 mb-3 rounded bg-slate-600 text-white"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <label className="block text-cyan-300 font-semibold mb-1">Bio:</label>
        <textarea
          className="w-full p-2 mb-3 rounded bg-slate-600 text-white"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <label className="block text-cyan-300 font-semibold mb-1">
          Avatar URL:
        </label>
        <input
          className="w-full p-2 mb-4 rounded bg-slate-600 text-white"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
