import Particle from "./BaseParticle"
import Coordinates from "../../../types/Coordinates"
import ParticleSize from "../../../types/ParticleSize"

export default class TraceParticle extends Particle {
    constructor(
        currentAbsolutePoint: Coordinates,
        color: string
    ) {
        const endRelativePoint: Coordinates = { x: 0, y: 0, z: 0 }
        const time: number = 0.5
        const size: ParticleSize = { width: 0.03, height: 0.03, depth: 0.03 }
        super(currentAbsolutePoint, endRelativePoint, color, time, size)
    }

    update(): void {
        this.position.set(this.currentAbsolutePoint.x, this.currentAbsolutePoint.y, this.currentAbsolutePoint.z)
        super.update()
    }
}