export const formatTime = (newformatTime) => {
  if (newformatTime == undefined || isNaN(newformatTime) || newformatTime < 0) {
    return null;
  }

  let seconds = (0 + Math.floor(newformatTime % 60));
  let minutes = (0 + Math.floor((newformatTime /= 60) % 60));
  let hours = (0 + Math.floor(newformatTime /= 3600));


  let zero = '00';
  let newHours = (zero+hours).slice(-zero.length);
  let newMinutes = (zero+minutes).slice(-zero.length);
  let newSeconds = (zero+seconds).slice(-zero.length);

  return newHours + ':' + newMinutes + ':' + newSeconds;


};
