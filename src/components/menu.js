import { GUI } from 'dat.gui'
export default function menu(object,camera){
    const gui = new GUI()
    const cubeFolder = gui.addFolder('Cube')
    cubeFolder.add(object.rotation, 'x', 0, Math.PI * 2)
    cubeFolder.add(object.rotation, 'y', 0, Math.PI * 2)
    cubeFolder.add(object.rotation, 'z', 0, Math.PI * 2)
    cubeFolder.open()
    const cameraFolder = gui.addFolder('Camera')
    cameraFolder.add(camera.position, 'z', 0, 10)
    cameraFolder.open()
    return
}