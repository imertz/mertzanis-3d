varying vec3 vUv;

void main() {
  float distanceToCenter = length(vUv);
  vec4 color;

  color = mix(vec4(0.5, 0.0, 0.5, 1.0), vec4(0.0, 0.5, 0.5, 1.0), distanceToCenter);
  color.a = 1.0 - distanceToCenter;

  gl_FragColor = color;
}
