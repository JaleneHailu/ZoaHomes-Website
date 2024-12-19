const fetchCompanyContent = async (country) => {
  const response = await fetch(`https://zoaavibackend.zoaavi.com/api/content/${country}`);
  return await response.json();
};

export default fetchCompanyContent;