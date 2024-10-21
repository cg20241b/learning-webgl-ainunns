precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying vec3 vNormal;

uniform sampler2D uSampler;
uniform vec3 uAmbientLight; // Ka in the phong model equation
// uniform vec3 uDirectionalLightColor;
// uniform vec3 uDirectionalLightDirection;
uniform vec3 uDiffuseLightColor; // Kd in the phong model equation
uniform vec3 uPointLightPosition;

void main(void) {
  // vec4 color = texture2D(uSampler, vTextureCoord);
  // float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  // gl_FragColor = vec4(vec3(gray), color.a);
  // gl_FragColor = vColor * texture2D(uSampler, vTextureCoord);

  // vec4 lighting = vec4(uAmbientLight, 1.0);
  // gl_FragColor = vColor * texture2D(uSampler, vTextureCoord) * lighting;

  // Normalize the normal vector
  vec3 N = normalize(vNormal);

  // Calculate the ambient light effect
  vec3 ambient = uAmbientLight * vColor.rgb;

  // Calculate the directional light effect
  // vec3 lightDirection = normalize(uDirectionalLightDirection);
  // float directionalLightIntensity = max(dot(normal, lightDirection), 0.0);
  // vec3 directionalLight = uDirectionalLightColor * directionalLightIntensity;

  // Calculate the diffuse light effect
  vec3 L = normalize(uPointLightPosition - vNormal);
  float LdotN = max(dot(N, L), 0.0);
  vec3 diffuse = uDiffuseLightColor * LdotN; // Kd * LdotN

  // Combine the ambient and directional light
  // vec4 lighting = vec4(uAmbientLight + directionalLight, 1.0);

  // Combine the ambient and diffuse light
  vec4 phongReflection = vec4(ambient + diffuse, 1.0);

  gl_FragColor = phongReflection * texture2D(uSampler, vTextureCoord);
}
