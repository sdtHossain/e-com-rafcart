import { ref } from 'vue'


export function getData(dataSet) {
  const resData = ref()
  fetch(`https://dummyjson.com/${dataSet}`)
  .then(res => res.json())
  .then(data => resData.value = data[dataSet])

  return resData
}