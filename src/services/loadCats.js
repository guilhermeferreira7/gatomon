import api from "./api";

export default async function loadCats() {
  const cats = [];
  const tempNums = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.round(Math.random() * 65 + 1);
    const cat = await api.get(`/cats/${random}`);
    if (!tempNums.includes(random)) {
      tempNums.push(random);
      cats.push(cat.data);
    } else {
      i--;
    }
  }
  return cats;
}
