import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import camera from '../core/camera'
import renderer from '../core/renderer'

const orbitControls = new OrbitControls(camera, renderer.domElement)

export default orbitControls