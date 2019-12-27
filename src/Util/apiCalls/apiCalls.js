export const fetchAllWorkouts = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'api/v1/workouts')
    const data = await response.json()
    return data
  } catch {
    throw new Error('Failed to get data')
  }
}