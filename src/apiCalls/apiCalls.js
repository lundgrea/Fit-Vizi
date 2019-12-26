export const fetchAllData = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'api/v1/data')
    const data = await response.json()
    return data
  } catch {
    throw new Error('Failed to get data')
  }
}