// BASE URL
const baseURL = process.env.REACT_APP_API_BASE_URL;

// Get date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if(month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
}

getCurrentMonth();