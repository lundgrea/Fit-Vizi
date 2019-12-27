import { cleanWorkoutResults } from './dataCleaner';

describe('cleanWorkoutResults', () => {
  it('should clean the workout results, post-fetch', () => {
    const mockDirtyData = {'workouts': [
      {
        "eventType": "none",
        "millisecondOffset": 5010000,
        "values": {
          "heartRate": 103,
          "cadence": 0,
          "power": 0,
          "temperature": 27,
          "elevation": 1537.2,
          "distance": 41363.09,
          "speed": 6.542,
          "positionLat": 40.01541,
          "positionLong": -105.1312
        }
      },
      {
        "eventType": "none",
        "millisecondOffset": 5011000,
        "values": {
          "heartRate": 102,
          "cadence": 0,
          "power": 0,
          "temperature": 27,
          "elevation": 1537.2,
          "distance": 41369.13,
          "speed": 6.195,
          "positionLat": 40.01535,
          "positionLong": -105.13119
        }
      },
  ]}
    const mockCleanData = [
      {
        "millisecondOffset": 5010000,
        "power": 0,
        "positionLat": 40.01541,
        "positionLong": -105.1312
      },
      {
        "millisecondOffset": 5011000,
        "power": 0,
        "positionLat": 40.01535,
        "positionLong": -105.13119
      },
    ]
    expect(cleanWorkoutResults(mockDirtyData)).toEqual(mockCleanData);
  });
});
