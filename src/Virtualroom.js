import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';

function ControlledObject(props) {
  // This component represents an object in the scene with both mouse and keyboard control.
  const meshRef = useRef();
  const { camera, mouse } = useThree();
  const [isDragging, setIsDragging] = useState(false);

  // Keyboard movement speed
  const speed = 0.5;

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          camera.position.z -= speed;
          break;
        case 'ArrowDown':
          camera.position.z += speed;
          break;
        case 'ArrowLeft':
          camera.position.x -= speed;
          break;
        case 'ArrowRight':
          camera.position.x += speed;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [camera]);

  // Mouse drag effect
  useFrame(() => {
    if (isDragging) {
      meshRef.current.position.x += (mouse.x * 10 - meshRef.current.position.x) * 0.5;
      meshRef.current.position.y += (-mouse.y * 10 - meshRef.current.position.y) * 0.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      {...props}
      onPointerDown={(e) => setIsDragging(true)}
      onPointerUp={(e) => setIsDragging(false)}
      onPointerOut={(e) => setIsDragging(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <ControlledObject position={new Vector3(0, 0, 0)} />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}

export default function Model(props) {
  const { nodes, materials } = useGLTF('/virtualroom.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-6.66, 0, 0]}>
            <mesh geometry={nodes.SM_Floor_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
          </group>
          <group position={[57.66, -5.63, -245.84]} rotation={[-Math.PI, 0, -Math.PI]}>
            <group position={[-170.31, 35.57, 76.74]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.25, 1]}>
              <mesh geometry={nodes.SM_bathMirror_surfaceShader38_0.geometry} material={materials.surfaceShader38} />
            </group>
          </group>
          <group position={[55.9, 0, 45.9]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.SM_KitchenBath_WALL_surfaceShader36_0.geometry} material={materials.surfaceShader36} />
          </group>
          <group position={[135.26, 0, 8.58]}>
            <group position={[1.51, 0, 0]}>
              <group position={[-2.21, 0, -242.37]} scale={[1, 1, 0.01]}>
                <mesh geometry={nodes.SM_BathMiniwall_surfaceShader8_0.geometry} material={materials.surfaceShader8} />
              </group>
            </group>
          </group>
          <group position={[-16.41, -5.62, 18.95]} rotation={[0, 0.2, 0]} scale={1.18}>
            <group position={[-367.56, -125.61, 334.52]} rotation={[0, -0.39, 0]} scale={1.75}>
              <mesh geometry={nodes.SM_BathThubFaucet_surfaceShader39_0.geometry} material={materials.surfaceShader39} />
            </group>
          </group>
          <group position={[-30.63, 0, -473.28]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.SM_Room_WALL_surfaceShader37_0.geometry} material={materials.surfaceShader37} />
          </group>
          <group position={[-524.3, 0.01, -151.6]} scale={1.18}>
            <mesh geometry={nodes.SM_Rug_surfaceShader33_0.geometry} material={materials.surfaceShader33} />
          </group>
          <group position={[-545.03, 1.34, -238.77]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.11}>
            <mesh geometry={nodes.SM_Blanket_surfaceShader12_0.geometry} material={materials.surfaceShader12} />
          </group>
          <mesh geometry={nodes.SM_Sofa_surfaceShader9_0.geometry} material={materials.surfaceShader9} />
          <group position={[-11.92, 0, 3.55]}>
            <mesh geometry={nodes.SM_BedFrame_surfaceShader13_0.geometry} material={materials.surfaceShader13} />
          </group>
          <group position={[-6.49, 1.93, -199.53]} rotation={[-Math.PI, Math.PI / 4, -Math.PI]}>
            <mesh geometry={nodes.SM_BathFaucet_surfaceShader42_0.geometry} material={materials.surfaceShader42} />
          </group>
          <mesh geometry={nodes.polySurface1136_surfaceShader24_0.geometry} material={materials.surfaceShader24} />
          <mesh geometry={nodes.SM_Doors_surfaceShader18_0.geometry} material={materials.surfaceShader18} />
          <mesh geometry={nodes.SM_KitchenBarLamps_Sink_surfaceShader5_0.geometry} material={materials.surfaceShader5} />
          <mesh geometry={nodes.SM_Counter_Stove_BowlTowel_Frames_surfaceShader2_0.geometry} material={materials.surfaceShader2} />
          <mesh geometry={nodes.SM_HallFrames_miniCounter_SkirtingBoard_surfaceShader23_0.geometry} material={materials.surfaceShader23} />
          <mesh geometry={nodes.SM_wallKitchen_q1_surfaceShader21_0.geometry} material={materials.surfaceShader21} />
          <mesh geometry={nodes.SM_WallLiving_Q2_3_surfaceShader25_0.geometry} material={materials.surfaceShader25} />
          <mesh geometry={nodes.SM_WallLiving_Q3_4_surfaceShader28_0.geometry} material={materials.surfaceShader28} />
          <mesh geometry={nodes.polySurface1114_Default_Material_0.geometry} material={materials.Default_Material} />
          <mesh geometry={nodes.polySurface1115_Default_Material_0.geometry} material={materials.Default_Material} />
          <mesh geometry={nodes.SM_Door_Table_Vases_surfaceShader10_0.geometry} material={materials.surfaceShader10} />
          <mesh geometry={nodes.SM_BarStools_surfaceShader3_0.geometry} material={materials.surfaceShader3} />
          <mesh geometry={nodes.SM_Books_surfaceShader29_0.geometry} material={materials.surfaceShader29} />
          <mesh geometry={nodes.SM_KitchenPanel_surfaceShader4_0.geometry} material={materials.surfaceShader4} />
          <mesh geometry={nodes.SM_RoomCabs_surfaceShader16_0.geometry} material={materials.surfaceShader16} />
          <mesh geometry={nodes.SM_BathCounter_surfaceShader7_0.geometry} material={materials.surfaceShader7} />
          <group position={[-584.33, 147.21, -251.72]} scale={[1217.47, 930.27, 1519.88]}>
            <mesh geometry={nodes.SM_BG_surfaceShader31_0.geometry} material={materials.surfaceShader31} />
          </group>
          <mesh geometry={nodes.SM_PaintingsWindow_Rails_surfaceShader11_0.geometry} material={materials.surfaceShader11} />
          <mesh geometry={nodes.SM_KitchenFaucet_surfaceShader40_0.geometry} material={materials.surfaceShader40} />
          <mesh geometry={nodes.SM_BedsideLamps_surfaceShader15_0.geometry} material={materials.surfaceShader15} />
          <mesh geometry={nodes.SM_PillowCushion_surfaceShader14_0.geometry} material={materials.surfaceShader14} />
          <mesh geometry={nodes.SM_ChairLamp_surfaceShader17_0.geometry} material={materials.surfaceShader17} />
          <mesh geometry={nodes.SM_ToiletTub_surfaceShader6_0.geometry} material={materials.surfaceShader6} />
          <mesh geometry={nodes.SM_BathCeilingMIrrorCase_surfaceShader22_0.geometry} material={materials.surfaceShader22} />
          <mesh geometry={nodes.SM_Bath_BookTP1SwitchTPholder_surfaceShader20_0.geometry} material={materials.surfaceShader20} />
          <mesh geometry={nodes.SM_Bath_TP_surfaceShader19_0.geometry} material={materials.surfaceShader19} />
          <mesh geometry={nodes.SM_CeilingLights_surfaceShader30_0.geometry} material={materials.surfaceShader30} />
          <mesh geometry={nodes.ceiling1polySurface1_surfaceShader35_0.geometry} material={materials.surfaceShader35} />
          <mesh geometry={nodes.SM_SofaRUG1_surfaceShader34_0.geometry} material={materials.surfaceShader34} />
          <mesh geometry={nodes.SM_WallLiving_q5_SM_WallLiving_q3VRayMtl37SG1_0.geometry} material={materials.SM_WallLiving_q3VRayMtl37SG1} />
          <mesh geometry={nodes.SM_Tv_Rack_cTable_Bowl1_surfaceShader27_0.geometry} material={materials.surfaceShader27} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/virtualroom.glb')

