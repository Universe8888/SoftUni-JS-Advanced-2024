/**
 * Adjusts the worker's level of hydration based on their dizziness status.
 * @param {Object} worker - Worker object with properties like weight, experience, levelOfHydrated, and dizziness.
 * @returns {Object} - Updated worker object.
 */

function solve(worker) {
    if (!worker || typeof worker !== 'object') {
        throw new Error('Invalid input: worker must be an object');
    }

    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

const worker = {
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
};

console.log(solve(worker));