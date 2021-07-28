import runMarsRover from './index.js';

describe('RunMarsRover', () => {
  describe('Turn right', () => {
    it('turns N to E', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "N", directions: "R"})).toEqual({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "E", directions: "R"})
    })
    it('turns E to S', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "E", directions: "R"})).toEqual({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "S", directions: "R"})
    })
    it('turns S to W', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "S", directions: "R"})).toEqual({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "W", directions: "R"})
    })
    it('turns W to N', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "W", directions: "R"})).toEqual({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "N", directions: "R"})
    })
  })

  describe('Turn left', () => {
    it('turns N to W', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "N", directions: "L"})).toEqual({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "W", directions: "L"})
    })
    it('turns W to S', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "W", directions: "L"})).toEqual({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "S", directions: "L"})
    })
    it('turns S to E', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "S", directions: "L"})).toEqual({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "E", directions: "L"})
    })
    it('turns E to N', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "E", directions: "L"})).toEqual({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "N", directions: "L"})
    })
  })

  describe('Moves forward depending on orientation', () => {
    it('moves forward N', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "N", directions: "M"})).toEqual({ xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 1, orientation: "N", directions: "M" })
    })
    it('moves forward E', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "E", directions: "M"})).toEqual({ xAxis: 4, yAxis: 4, xPosition: 1, yPosition: 0, orientation: "E", directions: "M" })
    })
    it('moves forward S', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 1, orientation: "S", directions: "M"})).toEqual({ xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "S", directions: "M" })
    })
    it('moves forward W', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 1, yPosition: 0, orientation: "W", directions: "M"})).toEqual({ xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "W", directions: "M" })
    })
  })

  describe('runMultipleDirections', () => {
    it('moves forward N twice and turns right', () => {
      expect(runMarsRover({xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 0, orientation: "N", directions: "MMR"})).toEqual({ xAxis: 4, yAxis: 4, xPosition: 0, yPosition: 2, orientation: "E", directions: "MMR" })
    })
    it('turns left twice and moves S 3 times', () => {
      expect(runMarsRover({xAxis: 10, yAxis: 10, xPosition: 5, yPosition: 5, orientation: "N", directions: "LLMMM"})).toEqual({ xAxis: 10, yAxis: 10, xPosition: 5, yPosition: 2, orientation: "S", directions: "LLMMM" })
    })
    it('turns right once and moves E 3 times then turns right and moves S once', () => {
      expect(runMarsRover({xAxis: 10, yAxis: 10, xPosition: 5, yPosition: 5, orientation: "N", directions: "RMMMRM"})).toEqual({ xAxis: 10, yAxis: 10, xPosition: 8, yPosition: 4, orientation: "S", directions: "RMMMRM" })
    })
  })

  describe('checks if rover has crashed', () => {
    it('doesnt move rover and returns crashed', () => {
      expect(runMarsRover({xAxis: 5, yAxis: 5, xPosition: 6, yPosition: 5, orientation: "N", directions: "RMMMRM"})).toEqual({xAxis: 5, yAxis: 5, xPosition: 6, yPosition: 5, orientation: "N", directions: "RMMMRM", crashed: true})
    })
    it('moves rover N twice and returns crashed', () => {
      expect(runMarsRover({xAxis: 5, yAxis: 5, xPosition: 5, yPosition: 4, orientation: "N", directions: "MM"})).toEqual({xAxis: 5, yAxis: 5, xPosition: 5, yPosition: 6, orientation: "N", directions: "MM", crashed: true})
    })
    it('moves rover N twice turns left, moves W twice and returns crashed', () => {
      expect(runMarsRover({xAxis: 5, yAxis: 5, xPosition: 1, yPosition: 0, orientation: "N", directions: "MMLMM"})).toEqual({xAxis: 5, yAxis: 5, xPosition: -1, yPosition: 2, orientation: "W", directions: "MMLMM", crashed: true})
    })
  })
})