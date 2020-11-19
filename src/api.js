// BASE URL
const baseURL = process.env.REACT_APP_API_BASE_URL;

// Get month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Get day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Get year/month/day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
// Current date\
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// Last year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// Next year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popularGames = `/games?dates=${lastYear},${currentDate}$ordering=-rating&page_size=15`;

// Export popular games url 
export const popularGamesURL = () => `${baseURL}${popularGames}`;
 