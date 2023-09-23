const getDataFromLS = () => {
  const data = localStorage.getItem("favorite-items");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
const setDataToLS = (id) => {
  const getData = getDataFromLS();
  const exist = getData.find((data) => data == id);
  if (!exist) {
    getData.push(id);
    localStorage.setItem("favorite-items", JSON.stringify(getData));
  }

};

export {getDataFromLS,setDataToLS}