import { fetchAllWorkouts } from './apiCalls'


  describe("fetchAllWorkouts", () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = [{
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
      ]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it("should call fetch with the correct url", () => {
      fetchAllWorkouts();
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + 'api/v1/workouts');
    });
  
    it("should return a successful response (HAPPY)", () => {
      expect(fetchAllWorkouts()).resolves.toEqual(mockResponse);
    });
  
    it("should return an error (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAllWorkouts()).rejects.toEqual(Error("Failed to get data"));
    });
  
    it("should return an error if the promise rejects (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error("Failed to get workouts"));
      });
      expect(fetchAllWorkouts()).rejects.toEqual(Error("Failed to get data"));
    });
  });