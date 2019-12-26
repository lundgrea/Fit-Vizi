import { fetchAllWorkouts } from '../apiCalls/apiCalls'


  describe("fetchAllWorkouts", () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = [{
        c1: "#586BA4",
        c2: "#594157",
        c3: "#A0D2DB",
        c4: "#BEE7E8",
        c5: "#CFBCDF",
        created_at: "2019-10-11T19:15:40.747Z",
        folder_id: 11,
        id: 20,
        name: "Whale Life",
        updated_at: "2019-10-11T19:15:40.747Z"
      }
      ]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it("should call fetch with the correct url", () => {
      fetchAllPalettes();
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes");
    });
  
    it("should return a successful response (HAPPY)", () => {
      expect(fetchAllPalettes()).resolves.toEqual(mockResponse);
    });
  
    it("should return an error (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAllPalettes()).rejects.toEqual(Error("Failed to get palettes"));
    });
  
    it("should return an error if the promise rejects (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error("Failed to get palettes"));
      });
      expect(fetchAllPalettes()).rejects.toEqual(Error("Failed to get palettes"));
    });
  });