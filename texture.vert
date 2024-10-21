attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;
uniform mat4 uTranslationMatrix;
varying vec2 vTextureCoord;

void main(void) {
  vTextureCoord = 1. - aTextureCoord;
  gl_Position = uTranslationMatrix * aVertexPosition;
}