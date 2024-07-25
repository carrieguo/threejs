// threeHelpers.js

import * as THREE from 'three';

export function createBox(size, color) {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    -size / 2, -size / 2, -size / 2,
    size / 2, -size / 2, -size / 2,
    size / 2, size / 2, -size / 2,
    -size / 2, size / 2, -size / 2,
    -size / 2, -size / 2, size / 2,
    size / 2, -size / 2, size / 2,
    size / 2, size / 2, size / 2,
    -size / 2, size / 2, size / 2,
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  const indices = new Uint16Array([
    0, 1, 2, 2, 3, 0,
    4, 5, 6, 6, 7, 4,
    0, 1, 5, 5, 4, 0,
    2, 3, 7, 7, 6, 2,
    0, 3, 7, 7, 4, 0,
    1, 2, 6, 6, 5, 1
  ]);
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));

  const material = new THREE.MeshBasicMaterial({ color });
  return new THREE.Mesh(geometry, material);
}