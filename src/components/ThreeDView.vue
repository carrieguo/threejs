<template>
    <div ref="threeContainer" class="three-container"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  
  export default {
    name: 'ThreeDView',
    mounted() {
      this.initThreeJS();
      window.addEventListener('resize', this.onWindowResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onWindowResize);
    },
    methods: {
      initThreeJS() {
        // 获取容器的宽高
        const container = this.$refs.threeContainer;
        const width = container.clientWidth;
        const height = container.clientHeight;
  
        // 创建场景
        this.scene = new THREE.Scene();
  
        // 创建相机
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.z = 5;
  
        // 创建渲染器
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(width, height);
        container.appendChild(this.renderer.domElement);
  
        // 创建Box的BufferGeometry
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
          -0.5, -0.5, -0.5,
          0.5, -0.5, -0.5,
          0.5,  0.5, -0.5,
          -0.5,  0.5, -0.5,
          -0.5, -0.5,  0.5,
          0.5, -0.5,  0.5,
          0.5,  0.5,  0.5,
          -0.5,  0.5,  0.5,
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
  
        // 创建材质并添加到场景
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
  
        // 添加边框
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
        this.scene.add(line);
  
        // 初始化OrbitControls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.enableZoom = true;
        this.controls.enablePan = true;
        this.controls.target.set(0, 0, 0);
        this.controls.update();
  
        // 开始动画渲染
        this.animate();
      },
      animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      },
      onWindowResize() {
        const container = this.$refs.threeContainer;
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
      }
    }
  }
  </script>
  
  <style>
  .three-container {
    width: 700px;
    height: 700px;
  }
  </style>