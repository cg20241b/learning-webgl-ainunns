attribute vec4 aVertexPosition;
uniform mat4 uTranslationMatrix;
varying vec2 posColor;

void main(void) {
    // -0.5 to 0.5
    // 0.0 to 1.0

    posColor = aVertexPosition.xy + 0.5;
    gl_Position = uTranslationMatrix * aVertexPosition;
}