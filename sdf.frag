precision mediump float;
varying vec2 vPos;
//const int num_circles = 100;
//uniform vec3 circles[num_circles];
void main() {
    // gl_FragColor = vec4(0.2784, 0.5373, 0.051, 1.0);
    // Single circle SDF
    vec3 circle = vec3(0.0, 0.0, 0.5);
    float d = length(vPos - circle.xy) - circle.z;
    // Sharp circle
    // d = step(0., d);
    // Smooth circle
    d = smoothstep(0., 0.01, d);
    gl_FragColor = vec4(d, d, d, 1.);
    // Multi circle SDF
    // float colour = 1.;
    // for(int i = 0; i < num_circles; i ++) {
    //   float d = length(vPos - circles[i].xy) - circles[i].z;
    //   d = step(0., d);
    //   colour *= d;
    // }
    // gl_FragColor = vec4(colour, colour, colour, 1.);
}