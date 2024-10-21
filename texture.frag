precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main(void) {
    // gl_FragColor = texture2D(uSampler, vTextureCoord);
    
    vec4 color = texture2D(uSampler, vTextureCoord);
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor = vec4(vec3(gray), color.a);
}