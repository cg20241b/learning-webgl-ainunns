precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
varying vec4 vColor;

void main(void) {
  // vec4 color = texture2D(uSampler, vTextureCoord);
  // float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  // gl_FragColor = vec4(vec3(gray), color.a);
  gl_FragColor = vColor * texture2D(uSampler, vTextureCoord);
}
