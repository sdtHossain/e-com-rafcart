import { ref, reactive, toRef } from 'vue'


export function getData(dataSet) {
  const resData = ref()
  fetch(`https://dummyjson.com/${dataSet}`)
  .then(res => res.json())
  .then(data => resData.value = data[dataSet])

  console.log("from hook ", resData.value)

  return resData
}