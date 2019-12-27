export const cleanWorkoutResults = (workouts) => {
  const cleanedData = workouts.workouts.map(workout => {
    if (!workout.millisecondOffset) {
      return {
        millisecondOffset: null,
        power: workout.values.power,
        positionLat: workout.values.positionLat,
        positionLong: workout.values.positionLong,
      };
    } if (!workout.values.power) {
      return {
        millisecondOffset: workout.millisecondOffset,
        power: null,
        positionLat: workout.values.positionLat,
        positionLong: workout.values.positionLong,
      }
    } else {
      return {
        millisecondOffset: workout.millisecondOffset,
        power: workout.values.power,
        positionLat: workout.values.positionLat,
        positionLong: workout.values.positionLong,
      }
    }
  });
  return cleanedData
};