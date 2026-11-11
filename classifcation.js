function scoreElevation(elevation) {

    if (elevation < 100) {
        return 0;
    }

    if (elevation < 300) {
        return 10;
    }

    if (elevation < 500) {
        return 20;
    }

    return 30;
}

function scoreRoadDistance(distanceToRoad) {

    if (distanceToRoad < 500) {
        return 0;
    }

    if (distanceToRoad < 2000) {
        return 20;
    }

    if (distanceToRoad < 5000) {
        return 40;
    }

    return 60;
}

function classifyTerrain(elevation, distanceToRoad) {

    const score =
        scoreElevation(elevation) +
        scoreRoadDistance(distanceToRoad);

    let terrain = "Terrain 0";

    if (score > 30) {
        terrain = "Terrain 1";
    }

    if (score > 60) {
        terrain = "Terrain 2";
    }

    return {
        score,
        terrain
    };
}

module.exports = {
    classifyTerrain
};
