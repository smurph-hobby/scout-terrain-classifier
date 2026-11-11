function classifyTerrain(
    slope,
    roadDistance,
    settlementDistance
) {

    if (
        slope < 10 &&
        roadDistance < 500 &&
        settlementDistance < 1000
    ) {
        return "Terrain 0";
    }

    if (
        slope < 20 &&
        roadDistance < 2000 &&
        settlementDistance < 5000
    ) {
        return "Terrain 1";
    }

    return "Terrain 2";
}

module.exports = {
    classifyTerrain
};
