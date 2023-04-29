const filterData = (searchText,data,setData) => {
    const filteredData = data.filter((item) => {
      return item.data.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setData(filteredData)
  }

  export default filterData

