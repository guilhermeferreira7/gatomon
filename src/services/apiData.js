// import axios from "axios";

// const getData = async () => {
//   return Promise.resolve(
//     axios.get('https://api.neko-atsume.emshea.com/cats')
//   ).then((res) => {
//     return res.data
//   })
// }

// const getData = async () => {
//   const cats = await axios.get('https://api.neko-atsume.emshea.com/cats');
//   return {
//     cats
//   }
// }

// ['_W'].cats.data

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

// export default getData();

import axios from "axios";

const [cats, setCats] = useState()
const getData = async () => {
  try {
    const result = await api.get("https://api.neko-atsume.emshea.com/cats");
    setCats(result.data)
  } catch (err) {
    console.error(err);
  }
};

export default getData();