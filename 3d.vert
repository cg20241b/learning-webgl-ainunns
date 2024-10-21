attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aVertexColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform mat4 uTranslationMatrix;
uniform mat4 uZRotationMatrix;
uniform mat4 uYRotationMatrix;
//uniform mat4 uModelViewMatrix;
//uniform mat4 uProjectionMatrix;

void main(void) {
    vec4 position = vec4(aVertexPosition, 1.0);
    //gl_Position = uProjectionMatrix * uModelViewMatrix * position;
    gl_Position = uYRotationMatrix * uZRotationMatrix * uTranslationMatrix * position;
    //gl_Position = uZRotationMatrix * uTranslationMatrix * position;
    vTextureCoord = aTextureCoord;
    vColor = aVertexColor;
}