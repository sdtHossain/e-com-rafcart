import { ref, reactive, toRef } from 'vue'


// export function getData(item, limit) {
//   let resData = ref()
//   fetch(`https://dummyjson.com/${item}?limit=${limit}`)
//   .then(res => res.json())
//   .then(data => resData.value = data[item])

//   console.log("from hook ", resData.value)

//   return resData
// }





// export const getData = async(item, limit) => { 
//   const res = await fetch(`https://dummyjson.com/${item}?limit=${limit}`)
//   const data = await res.json()
//   console.log(data.products)
//   return data.products
// }



// export const getData = async(item, limit) => {
//   const res = await fetch(`https://dummyjson.com/${item}?limit=${limit}`)
//   const data = await res.json()
//   // products.value = data.products

//   return data.products
// }

export function useFetch(url) {
  // const data = ref(null)

  return fetch(url)
    .then((res) => res.json())
    .then((json) => json.products)
}