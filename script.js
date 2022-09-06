const url= 'http://api.weatherapi.com/v1/'
const key= '976172db04ba47d6b24230513220409'

const setQuery= (e)=>{
    if(e.keyCode=='13')
      getResult(searchBar.value)
}
const getResult= (cityName)=>{
    
    let query= `${url}current.json?key=${key}&q=${cityName}`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result) =>{
    let city = document.querySelector('.city')
    city.innerText = `${result.location.name}, ${result.location.country}`
    console.log(result);

    let temp = document.querySelector('.temp')
    temp.innerText = `${result.current.temp_c} °C`

    let desc =document.querySelector('.desc')
    desc.innerText = `${result.current.condition.text}`
    
    let time = document.querySelector('.time')
    time.innerText = `${result.location.localtime}`
}

const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)