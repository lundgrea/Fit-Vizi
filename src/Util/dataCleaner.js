export const cleanWorkoutResults = (workouts) => {
  const cleanedData = workouts.workouts.map(workout => {
    if (workout.millisecondOffset && workout.values.power && workout.values.positionLat && workout.values.positionLong) {
      return {
        millisecondOffset: workout.millisecondOffset,
        power: workout.values.power,
        positionLat: workout.values.positionLat,
        positionLong: workout.values.positionLong,
      };
    } else {
      return {
        millisecondOffset: null,
        power: null,
        positionLat: null,
        positionLong: null,
      }
    }
  });
  return cleanedData
};