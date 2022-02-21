import * as THREE from 'three';
export default function Sphere(){

    const material = new THREE.LineBasicMaterial( {
        color: 0xFF6347,
        linewidth: 1,
        linecap: 'round', //ignored by WebGLRenderer
        linejoin:  'round' //ignored by WebGLRenderer
    } );

    const sphereGeometry = new THREE.SphereGeometry(2);
    var sphere = new THREE.Mesh( sphereGeometry, material );
    return sphere
}