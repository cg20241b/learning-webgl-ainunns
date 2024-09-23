precision mediump float;
varying vec2 posColor;
void main(void) {
    gl_FragColor = vec4(posColor.x, posColor.y, 0.0, 1.0);
}