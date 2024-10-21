precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;
uniform vec3 uAmbientLight;

void main(void) {
  // vec4 color = texture2D(uSampler, vTextureCoord);
  // float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  // gl_FragColor = vec4(vec3(gray), color.a);
  // gl_FragColor = vColor * texture2D(uSampler, vTextureCoord);
  vec4 lighting = vec4(uAmbientLight, 1.0);
  gl_FragColor = vColor * texture2D(uSampler, vTextureCoord) * lighting;
}
