const api_params = new Date().toJSON().slice(0, 4) + new Date().toJSON().slice(5, 7) + new Date().toJSON().slice(8, 10);
const api_url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&date=" + api_params;
 
// Defining async function
async function getDataApi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    let data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getDataApi(api_url);
 
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<li class="table-header">
            <div class="col col-1">Currency code</div>
            <div class="col col-2">Name of currency</div>
            <div class="col col-3">Cost</div>  
            
         </li>`;
   
    // Loop to access all rows 
    for (let r of data) {
        tab += `<li class="table-row"> 
    <div class="col col-1">${r.cc} </div>
    <div class="col col-2">${r.txt}</div>
    <div class="col col-3">${r.rate}</div> 
             
</li>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("money").innerHTML = tab;
}