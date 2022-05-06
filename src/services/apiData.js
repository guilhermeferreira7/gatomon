import axios from "axios";

const getData = async () => {
  const cats = await axios.get('https://api.neko-atsume.emshea.com/cats');
  return {
    cats
  }
}

// const apiData = {
//   allCats: Promise.resolve(
//     axios.get('https://api.neko-atsume.emshea.com/cats').then((res) => {
//       return res;
//     })
//   ),

//   getCatById: (catId) => {
//     Promise.resolve(
//       axios.get(`https://api.neko-atsume.emshea.com/cats/${catId}`).then((res) => {
//         return res;
//     })
//   )},

//   getCatByName: (catName) => {
//     Promise.resolve(`https://api.neko-atsume.emshea.com/cats/${catName}`)
//   } 

// }

export default getData();