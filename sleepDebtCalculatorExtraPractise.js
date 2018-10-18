/*
For extra practice, try these:

    getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.

    Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.
*/

const getActualSleepHours = () => 6 + 6 + 6 + 6 + 6 + 6 + 8;

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(6);
  
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