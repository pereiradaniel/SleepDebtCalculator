const getSleepHours = day => {
  if (day === 'monday') {
    return 6
  } else if (day === 'tuesday') {
    return 6
  } else if (day === 'wednesday') {
    return 6
  } else if (day === 'thursday') {
    return 6
  } else if (day === 'friday') {
    return 6
  } else if (day === 'saturday') {
    return 6
  } else if (day === 'sunday') {
    return 8
  };
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 6;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log(
      `You are getting the perfect amount of sleep.`
    );
  } else if (actualSleepHours > idealSleepHours) {
    const sleepSurplus = actualSleepHours - idealSleepHours;
    console.log(
      `You got more ${sleepSurplus} hrs more sleep than needed.`
    );
  } else if (actualSleepHours < idealSleepHours) {
    const sleepDebt = idealSleepHours - actualSleepHours;
    console.log(
      `You got ${sleepDebt} hrs less sleep than ideal.`
    );
  };
};

calculateSleepDebt();