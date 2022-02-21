import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
import { throttle } from 'lodash-es';
import setCanvasDimensions from './setCanvasDimensions.js';
import initializeScene from './initializeScene.js';
import Sphere from './Sphere.js';
import menu from './menu.js';


export default function ThreeDView(div){
    //set up 
    const { scene, renderer, camera } = initializeScene(div);
    const controls = new OrbitControls( camera, renderer.domElement );
    const sphere = Sphere()
    menu(sphere, camera)
    scene.add(sphere);
    const light = new THREE.DirectionalLight( 0xFFFFFF );
    const helper = new THREE.DirectionalLightHelper( light, 5 );
    scene.add(helper)

    //animate
    var animate = function () {
      requestAnimationFrame( animate );
      controls.update();
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    var addSphere = function(){
        scene.add(sphere)
    }

    return (
      <div/>
    )
}