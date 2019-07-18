#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D texture;
varying vec2 vUv;

void main( void ) {
	gl_FragColor = vec4(
		texture2D(texture, vec2(vUv.x, vUv.y / 2. + 0.5)).rgb,
		texture2D(texture, vec2(vUv.x, vUv.y / 2.)).r
	);
}
