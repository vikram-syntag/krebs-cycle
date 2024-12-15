import { Vector3 } from "three";

export function calculateCircularPosition(index: number, totalSteps: number, radius: number): [number, number, number] {
  const angle = (index * 2 * Math.PI) / totalSteps;
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);
  return [x, 0, z];
}

export function calculateLinePoints(
  startIndex: number,
  endIndex: number,
  totalSteps: number,
  radius: number
): [[number, number, number], [number, number, number]] {
  const startAngle = (startIndex * 2 * Math.PI) / totalSteps;
  const endAngle = (endIndex * 2 * Math.PI) / totalSteps;
  
  const startX = radius * Math.cos(startAngle);
  const startZ = radius * Math.sin(startAngle);
  const endX = radius * Math.cos(endAngle);
  const endZ = radius * Math.sin(endAngle);
  
  return [[startX, 0, startZ], [endX, 0, endZ]];
}