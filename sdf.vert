attribute vec2 aVertexPosition;
varying vec2 vPos;
void main() {
    vPos = aVertexPosition;
    vec4 positionVec4 = vec4(aVertexPosition, 1.0, 1.0);
    //positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
    gl_Position = positionVec4;
}