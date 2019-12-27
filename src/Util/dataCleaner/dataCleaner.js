export const cleanWorkoutResults = (workouts) => {
  const cleanedData = workouts.workouts.map(workout => {
      return {
        millisecondOffset: workout.millisecondOffset,
        power: workout.values.power,
        positionLat: workout.values.positionLat,
        positionLong: workout.values.positionLong,
    }
  });
  return cleanedData
};