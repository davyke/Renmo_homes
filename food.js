const submit_button=document.getElementById("submit");
const meal_list=document.getElementById("meal");
submit_button.addEventListener("click", getMealList);
const my_input = document.getElementById("search-input");
my_input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        getMealList();

    }
});
function getMealList(){
    let meal_content=document.getElementById("search-input").value.trim();
    console.log(meal_content);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal_content}`).then(response=>response.json()).then(data=>{
        
        let html="";
        if(data.meals) {
            data.meals.forEach(meal=>
                html+=`
                <div class="meal-id" data-id="${meal.idMeal}">
                    <div class="meal-imge">
                        <img src="${meal.strMealThumb}">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
                `)
        }
        else{
           html= `
            <div class="no-data">
                <p>!!!opps there is no such meal</p>
                <img src="./not_found.jpg">
           
           
           
            </div>
           
           
           `
        }
        meal_list.innerHTML=html;
    }).catch(error=>{
        console.log("there was an error and it is "+ error);
    });
}