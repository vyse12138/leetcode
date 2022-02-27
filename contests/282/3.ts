function minimumTime(time: number[], totalTrips: number): number {
  const findTrips = (totalTime: number) => {
    let trips = 0

    for (const t of time) {
      trips += Math.floor(totalTime / t)
    }

    return trips
  }

  let right = 10 ** 11
  let left = 0

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    const trips = findTrips(mid)
    console.log(mid, trips)

    if (trips > totalTrips) {
      right = mid
    } else if (trips < totalTrips) {
      left = mid + 1
    } else {
      right = mid
      break
    }
  }

  while (right >= 1) {
    if (findTrips(right - 1) === findTrips(right)) {
      right--
    } else {
      break
    }
  }

  return right
}
