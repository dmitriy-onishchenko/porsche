import * as THREE from 'three';
import seeThru from 'seethru';
import vertexShader from './shaders/transparent-player-vertex.glsl';
import fragmentShader from './shaders/transparent-player-fragment.glsl';
import helpers from './helpers';

let OrbitControls = require('three-orbit-controls')(THREE);

let hasVideoTextureSupport = !helpers.isIE();

class TransparentPlayer {
	constructor(container, debug = false) {
		this.debug = debug;
		this.container = container;
		this.video = null;

		this.startRendering = this.startRendering.bind(this);
		this.onResize = this.onResize.bind(this);
		this.onLoadedMetadata = this.onLoadedMetadata.bind(this);

		this.onResize();
	}

	initVideo() {
		return new Promise((resolve) => {
			let attrs = $(this.container).data('attrs');

			this.video = document.createElement('video');
			this.video.preload = 'auto';
			this.video.src = this.container.dataset.src;

			if (attrs) {
				if (attrs.autoplay) {
					this.video.autoplay = attrs.autoplay;
				}

				if (attrs.muted) {
					this.video.muted = attrs.muted;
					this.video.setAttribute('muted', '');
				}

				if (attrs.loop) {
					this.video.loop = attrs.loop;
				}

				if (attrs.playsinline) {
					this.video.playsinline = attrs.playsinline;
					this.video.setAttribute('playsinline', '');
				}
			}

			this.container.appendChild(this.video);

			this.video.onloadedmetadata = () => {
				this.onLoadedMetadata();
			};

			this.video.oncanplaythrough = () => {
				resolve();
			};

			this.video.load();

			if (!hasVideoTextureSupport) {
				this.seeThru = seeThru.create(this.video);
			}
		});
	}

	initRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			alpha: true,
		});

		this.renderer.setPixelRatio(devicePixelRatio);
		this.renderer.setSize(this.width, this.height, false);
		this.container.appendChild(this.renderer.domElement);
	}

	initScene() {
		this.scene = new THREE.Scene();
	}

	initCamera() {
		this.calculateOrthographicCameraFrustum();

		this.camera = new THREE.OrthographicCamera(
			this.cameraLeft,
			this.cameraRight,
			this.cameraTop,
			this.cameraBottom,
			-1,
			1
		);

		this.activeCamera = this.camera;
	}

	initGeometry() {
		this.geometry = new THREE.PlaneBufferGeometry(this.normalizedFrameWidth, this.normalizedFrameHeight);
	}

	initMaterial() {
		this.material = new THREE.ShaderMaterial({
			uniforms: {
				texture: {
					type: 'sampler2D',
					value: this.texture,
				},
			},
			transparent: true,
			vertexShader,
			fragmentShader,
		});
	}

	initMesh() {
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.scene.add(this.mesh);
	}

	initEvents() {
		window.addEventListener('resize', this.onResize);
	}

	initHelpers() {
		this.axesHelper = new THREE.AxesHelper(100);
		this.scene.add(this.axesHelper);

		this.cameraHelper = new THREE.CameraHelper(this.camera);
		this.scene.add(this.cameraHelper);

		this.debugCamera = new THREE.PerspectiveCamera(45, this.aspectRatio, 0.1, 100);

		this.debugCamera.position.set(0, 0, 1);
		this.activeCamera = this.debugCamera;

		this.orbitControls = new OrbitControls(this.debugCamera);
	}

	render() {
		this.renderer.render(this.scene, this.activeCamera);
	}

	startRendering() {
		if (hasVideoTextureSupport) {
			this.rafId = requestAnimationFrame(this.startRendering);
			this.render();
		} else if (this.seeThru) {
			// this.seeThru._seeThru.startRendering();
		}
	}

	stopRendering() {
		if (hasVideoTextureSupport) {
			cancelAnimationFrame(this.rafId);
		} else if (this.seeThru) {
			// this.seeThru._seeThru.stopRendering();
		}
	}

	init(startRendering = true) {
		return this.initVideo()
			.then(() => {
				if (hasVideoTextureSupport) {
					this.initRenderer();
					this.initScene();
					this.initCamera();
					this.initGeometry();
					this.initMaterial();
					this.initMesh();
					this.initEvents();

					if (this.debug) {
						this.initHelpers();
					}
				}

				if (startRendering) {
					this.startRendering();
				}
			});
	}

	calculateOrthographicCameraFrustum() {
		if (this.frameAspectRatio >= this.aspectRatio) {
			this.cameraLeft = -this.normalizedFrameWidth / 2;
			this.cameraRight = this.normalizedFrameWidth / 2;
			this.cameraTop = this.normalizedFrameWidth / 2 / this.aspectRatio;
			this.cameraBottom = -this.normalizedFrameWidth / 2 / this.aspectRatio;
		} else {
			this.cameraLeft = -this.normalizedFrameHeight / 2 * this.aspectRatio;
			this.cameraRight = this.normalizedFrameHeight / 2 * this.aspectRatio;
			this.cameraTop = this.normalizedFrameHeight / 2;
			this.cameraBottom = -this.normalizedFrameHeight / 2;
		}
	}

	onResize() {
		let {width, height} = this.container.getBoundingClientRect();

		this.width = width;
		this.height = height;
		this.aspectRatio = width / height;

		if (this.renderer) {
			this.renderer.setSize(this.width, this.height, false);
		}

		if (this.camera) {
			this.calculateOrthographicCameraFrustum();

			this.camera.left = this.cameraLeft;
			this.camera.right = this.cameraRight;
			this.camera.top = this.cameraTop;
			this.camera.bottom = this.cameraBottom;

			this.camera.updateProjectionMatrix();
		}

		if (this.debugCamera) {
			this.debugCamera.updateProjectionMatrix();
		}
	}

	onLoadedMetadata() {
		if (hasVideoTextureSupport) {
			this.texture = new THREE.VideoTexture(this.video);
			this.frameWidth = this.video.videoWidth;
			this.frameHeight = this.video.videoHeight / 2;
			this.frameAspectRatio = this.frameWidth / this.frameHeight;
			this.normalizedFrameWidth = 1;
			this.normalizedFrameHeight = 1 / this.frameAspectRatio;
		}
	}
}

export default TransparentPlayer;
