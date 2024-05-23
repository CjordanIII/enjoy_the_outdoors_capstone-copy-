async function getSunsetForMountain(lat, lng) {
  try {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    data = data.results.sunrise;
    return data;
  } catch (error) {
    throw error;
  }
}

export { getSunsetForMountain };
