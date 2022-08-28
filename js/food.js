const loadMeals = () =>{
  fetch('www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then ( res => res.json())
  .then(data => console.log(data))
}
loadMeals();
