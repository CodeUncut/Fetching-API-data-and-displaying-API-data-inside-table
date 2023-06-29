fetch('https://fakestoreapi.com/products').then((data) =>{
    // console.log(data) // data in json format
    return data.json(); // json data in object format 
}).then((objectData)=>{
    console.log(objectData[0].title) // to get indiviual item from the objects array

    let tableData = "";

    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td><img src="${values.image}" /></td>
        <td>${values.price}</td>
      </tr>`;
    })
    // console.log(tableData)

    document.getElementById("table_body").innerHTML = tableData
});