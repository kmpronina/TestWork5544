function getTime(dt: number) {
  const date = new Date(dt * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  const formattedTime = hours + ':' + minutes.slice(-2);

  return formattedTime;
}

export default getTime;
