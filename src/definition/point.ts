const POINT = {
    TEST: [
        // { x: 0, y: 10, z: 0 },
    ],

    LAUNCHING_BASE: {
        ONE: { x: -5.5, y: 0, z: 16.5 },
        TWO: { x: 0, y: 0, z: 11 },
        THREE: { x: 5.5, y: 0, z: 5.5 },
        FOUR: { x: 11, y: 0, z: 0 },
        FIVE: { x: 16.5, y: 0, z: -5.5 },
    },

    LAUNCHING_OFFSET: {
        LOWEST: { x: 0, y: 4, z: 0 },
        LOW: { x: 0, y: 6, z: 0 },
        MEDIUM: { x: 0, y: 8, z: 0 },
        HIGH: { x: 0, y: 10, z: 0 },
        HIGHEST: { x: 0, y: 12, z: 0 }
    },

    EXPLOSION_OFFSET: {
        BURST: [
            { x: 1.30, y: 14, z: 4.83 },  // 75°
            { x: -4.70, y: 13, z: 1.71 },  // 160°
            { x: -2.87, y: 13, z: -4.10 }, // 235°
            { x: 3.83, y: 14, z: -3.22 }, // 320°

            { x: 10.0, y: 12, z: 0.0 }, // 0°
            { x: 8.66, y: 11, z: 5.0 }, // 30°
            { x: 5.0, y: 11, z: 8.66 }, // 60°
            { x: 0.0, y: 12, z: 10.0 }, // 90°
            { x: -5.0, y: 12, z: 8.66 }, // 120°
            { x: -8.66, y: 11, z: 5.0 }, // 150°
            { x: -10.0, y: 11, z: 0.0 }, // 180°
            { x: -8.66, y: 12, z: -5.0 }, // 210°
            { x: -5.0, y: 12, z: -8.66 }, // 240°
            { x: -0.0, y: 11, z: -10.0 }, // 270°
            { x: 5.0, y: 11, z: -8.66 }, // 300°
            { x: 8.66, y: 12, z: -5.0 }, // 330°

            { x: 7.00, y: 10, z: 0.00 },  // 0°
            { x: 4.95, y: 9, z: 4.95 },  // 45°
            { x: 0.00, y: 9, z: 7.00 },  // 90°
            { x: -4.95, y: 10, z: 4.95 }, // 135°
            { x: -7.00, y: 10, z: 0.00 }, // 180°
            { x: -4.95, y: 9, z: -4.95 },// 225°
            { x: 0.00, y: 9, z: -7.00 }, // 270°
            { x: 4.95, y: 10, z: -4.95 }, // 315°
        ],
        BOMB: [
            { x: 0, y: 0, z: 0 }
        ],
        ERUPT: [
            { x: 5, y: 7, z: 0.0 }, // 0°
            { x: 3, y: 7, z: 3 }, // 45°
            { x: 0.0, y: 7, z: 5 }, // 90°
            { x: -3, y: 7, z: 3 }, // 135°
            { x: -5, y: 7, z: 0.0 }, // 180°
            { x: -3, y: 7, z: -3 }, // 225°
            { x: -0.0, y: 7, z: -5 }, // 270°
            { x: 3, y: 7, z: -3 }, // 315°

            { x: 2, y: 5, z: 0.0 }, // 0°
            { x: 1, y: 5, z: 2 }, // 60°
            { x: -1, y: 5, z: 2 }, // 120°
            { x: -2, y: 5, z: 0.0 }, // 180°
            { x: -1, y: 5, z: -2 }, // 240°
            { x: 1, y: 5, z: -2 }, // 300°
        ],
        BLOOM: [
            { x: 0, y: 0, z: 0 }
        ],
        TWINKLE: [
            { x: 0, y: 0, z: 0 }
        ],
        SPARKLE: [
            { x: 0, y: 0, z: 0 }
        ],
        CHAIN_BURST: [
            { x: 0, y: 0, z: 0 }
        ],
    }
}

export default POINT

// Back up.
// { x: 10.0, y: 12, z: 0.0 }, // 0°
// { x: 9.96, y: 12, z: 0.87 }, // 5°
// { x: 9.85, y: 12, z: 1.74 }, // 10°
// { x: 9.66, y: 12, z: 2.59 }, // 15°
// { x: 9.4, y: 12, z: 3.42 }, // 20°
// { x: 9.06, y: 12, z: 4.23 }, // 25°
// { x: 8.66, y: 12, z: 5.0 }, // 30°
// { x: 8.19, y: 12, z: 5.74 }, // 35°
// { x: 7.66, y: 12, z: 6.43 }, // 40°
// { x: 7.07, y: 12, z: 7.07 }, // 45°
// { x: 6.43, y: 12, z: 7.66 }, // 50°
// { x: 5.74, y: 12, z: 8.19 }, // 55°
// { x: 5.0, y: 12, z: 8.66 }, // 60°
// { x: 4.23, y: 12, z: 9.06 }, // 65°
// { x: 3.42, y: 12, z: 9.4 }, // 70°
// { x: 2.59, y: 12, z: 9.66 }, // 75°
// { x: 1.74, y: 12, z: 9.85 }, // 80°
// { x: 0.87, y: 12, z: 9.96 }, // 85°
// { x: 0.0, y: 12, z: 10.0 }, // 90°
// { x: -0.87, y: 12, z: 9.96 }, // 95°
// { x: -1.74, y: 12, z: 9.85 }, // 100°
// { x: -2.59, y: 12, z: 9.66 }, // 105°
// { x: -3.42, y: 12, z: 9.4 }, // 110°
// { x: -4.23, y: 12, z: 9.06 }, // 115°
// { x: -5.0, y: 12, z: 8.66 }, // 120°
// { x: -5.74, y: 12, z: 8.19 }, // 125°
// { x: -6.43, y: 12, z: 7.66 }, // 130°
// { x: -7.07, y: 12, z: 7.07 }, // 135°
// { x: -7.66, y: 12, z: 6.43 }, // 140°
// { x: -8.19, y: 12, z: 5.74 }, // 145°
// { x: -8.66, y: 12, z: 5.0 }, // 150°
// { x: -9.06, y: 12, z: 4.23 }, // 155°
// { x: -9.4, y: 12, z: 3.42 }, // 160°
// { x: -9.66, y: 12, z: 2.59 }, // 165°
// { x: -9.85, y: 12, z: 1.74 }, // 170°
// { x: -9.96, y: 12, z: 0.87 }, // 175°
// { x: -10.0, y: 12, z: 0.0 }, // 180°
// { x: -9.96, y: 12, z: -0.87 }, // 185°
// { x: -9.85, y: 12, z: -1.74 }, // 190°
// { x: -9.66, y: 12, z: -2.59 }, // 195°
// { x: -9.4, y: 12, z: -3.42 }, // 200°
// { x: -9.06, y: 12, z: -4.23 }, // 205°
// { x: -8.66, y: 12, z: -5.0 }, // 210°
// { x: -8.19, y: 12, z: -5.74 }, // 215°
// { x: -7.66, y: 12, z: -6.43 }, // 220°
// { x: -7.07, y: 12, z: -7.07 }, // 225°
// { x: -6.43, y: 12, z: -7.66 }, // 230°
// { x: -5.74, y: 12, z: -8.19 }, // 235°
// { x: -5.0, y: 12, z: -8.66 }, // 240°
// { x: -4.23, y: 12, z: -9.06 }, // 245°
// { x: -3.42, y: 12, z: -9.4 }, // 250°
// { x: -2.59, y: 12, z: -9.66 }, // 255°
// { x: -1.74, y: 12, z: -9.85 }, // 260°
// { x: -0.87, y: 12, z: -9.96 }, // 265°
// { x: -0.0, y: 12, z: -10.0 }, // 270°
// { x: 0.87, y: 12, z: -9.96 }, // 275°
// { x: 1.74, y: 12, z: -9.85 }, // 280°
// { x: 2.59, y: 12, z: -9.66 }, // 285°
// { x: 3.42, y: 12, z: -9.4 }, // 290°
// { x: 4.23, y: 12, z: -9.06 }, // 295°
// { x: 5.0, y: 12, z: -8.66 }, // 300°
// { x: 5.74, y: 12, z: -8.19 }, // 305°
// { x: 6.43, y: 12, z: -7.66 }, // 310°
// { x: 7.07, y: 12, z: -7.07 }, // 315°
// { x: 7.66, y: 12, z: -6.43 }, // 320°
// { x: 8.19, y: 12, z: -5.74 }, // 325°
// { x: 8.66, y: 12, z: -5.0 }, // 330°
// { x: 9.06, y: 12, z: -4.23 }, // 335°
// { x: 9.4, y: 12, z: -3.42 }, // 340°
// { x: 9.66, y: 12, z: -2.59 }, // 345°
// { x: 9.85, y: 12, z: -1.74 }, // 350°
// { x: 9.96, y: 12, z: -0.87 },  // 355°