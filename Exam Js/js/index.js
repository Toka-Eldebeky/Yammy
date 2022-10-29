$(document).ready(async function() {
    // Category variables
    let categories = [];
    let categoriesEl = "";



    // Area variables 
    let areaCategory = [];
    let areaContainer = $("#mainArea")
    let areaCat = "";
    let finalData = "";


    // Search variables 
    let mainMeal = "";
    let resultMeal = [];

    // Ingredient variables 
    let finalIngredient = "";
    let ingredientCard = "";
    let ingredientContainer = $("#ingredientBase")


    // Categories Main Page 

    await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => response.json())
        .then((data) => categories = data.categories);


    categories.forEach(category => {
        categoriesEl +=
            `<div class="col-md-6 col-lg-3 my-3 ">
                <a class="w-100 text-decoration-none text-black" href="#" onclick="getCatData(event ,'${category.strCategory}' )"  >
                    <div class="mainDiv">
                        <img class="w-100 h-100" src="${category.strCategoryThumb}" alt="" />
                        <div class="category-overlay text-center py-3">
                        <h3>${category.strCategory}</h3>
                        <p>${category.strCategoryDescription}</p>
                        </div>
                    </div>
                </a>
            </div>`

    });
    categoriesContainer.html(categoriesEl)



    // <<<<<<Home Bage >>>>>>>>

    // Side Bar 

    let innerBoxWidth = $("#outerBox").outerWidth();
    let navleft = $("#navOuter").css("left");
    $("#closeIcon").click(function() {
        navleft = $("#outerBox").css("left");
        if (navleft == "0px") {
            $("#sideBox").animate({ left: `${innerBoxWidth}px` }, 500);
            navleft = $("#outerBox").animate({ left: `${innerBoxWidth}px` }, 500);
            $("#closeIcon").removeClass("fa-bars").addClass("fa-xmark");
        } else {
            $("#sideBox").animate({ left: `0px` }, 500);
            navleft = $("#outerBox").animate({ left: `0px` }, 500);
            $("#closeIcon").removeClass("fa-xmark").addClass("fa-bars");
        }
    });



    // Home Apis 
    let homeApisContain = $("#homeApi");
    let mealHome = "";

    async function getApiHome() {
        let mealaName = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        let finalMeal = await mealaName.json();


        finalMeal.meals.forEach(meal => {
            mealHome += ` <div class="col-md-6 col-lg-3 my-3">
                <div class="w-100 text-decoration-none text-black" href="#">
                    <div class="mainDiv">
                        <img class="w-100 h-100" src="${meal.strMealThumb}" alt="" />
                        <div class="text-white text-center py-3 category-overlay">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                </div>
            </div>`
        })
        homeApisContain.html(mealHome);

    }
    getApiHome()
        // Area Bage

    async function getArea() {
        let areaName = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')

        let finalData = await areaName.json();


        finalData.meals.forEach(area => {
            areaCat += `<div class="col-md-6 col-lg-3 my-3 onclick="getAreaCatigory(e , )">
            <img class="bng-img w-100 text-white border border-0 border-bottom border-danger bg-gradient bg-white bg-opacity-10 rounded-5" src="./imgs/3437694-200.png" alt="" />
            <h2 class="text-danger text-center py-3">${area.strArea}</h2>
            </div>`
        })
        areaContainer.html(areaCat);

    }
    getArea()



    // Ingredients Bage 


    async function ingredient() {
        let ingredientMain = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')

        let finalIngredient = await ingredientMain.json();


        finalIngredient.meals.forEach(ingred => {
            ingredientCard += `<div class="col-md-6 col-lg-3 my-3">
          <div class="w-100 text-decoration-none text-black" href="#">
          <div class="mainDiv">
          <img class="w-100 bng-img text-white border border-0 border-bottom border-danger bg-gradient bg-white bg-opacity-10 rounded-5" src="./imgs/30substitutions-superJumbo.jpeg" alt="" />
          <div class="category-overlay text-white text-center py-3">
          <h4>${ingred.strIngredient}</h3>
          <p>${ingred.strDescription}</p>
          </div>
          </div>
          </div>
          </div>`


            // let ingredientCrop = ingred.splice(0);
            console.log(finalIngredient.meals.splice(20));


        })

        ingredientContainer.html(ingredientCard);

    }
    ingredient();



    // Search Bage

    // By Name


    //     $("#SearchNameInp").keyup(async function() {
    //             let searchValue = $("#SearchNameInp").val();
    //             console.log(searchValue);
    //             let response = await fetch(
    //                 `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    //             );
    //             let myData = await response.json();
    //             data = myData.meals;
    //             var temp = "";
    //             for (var i = 0; i < data.length; i++) {
    //                 temp += `        
    // <div class=" col-md-3 col-sm-2 mt-3">
    // <div class="homeMeal">
    //     <h2 class="catgmealId d-none">${data[i].idMeal}</h2>
    //         <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded-2">
    //     <div class="mealOverly">
    //         <h2 class="mealText ">${data[i].strMeal}</h2>
    //     </div>
    // </div>
    // </div>`;
    //             }
    //             document.getElementById("searchContent").innerHTML = temp;
    //      }



    let searchTempNm = "";

    $("#searchTempNm").onchange
    let searchValue = $("#searchTempNm").val();

    async function byName() {
        let mealName = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        let mainMeal = await mealName.json();
        let nameMeal = mainMeal.meals
            // console.log(nameMeal)

    }
    byName()


    // By First Letter 
    searchTempLi = $("#searchLetterInput");
    async function byLetter() {
        let mealLetter = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        let letterMeal = await mealLetter.json();
        // console.log(letterMeal)

    }
    byLetter()



});


// Categories Target Bage

const categoriesContainer = $("#categoriesEl");
let filteredCat = "";
let filteredCatEl = "";
async function getCatData(e, categroyData) {
    e.preventDefault();
    let dataCard = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categroyData}`)
        .then((response) => response.json())
        .then((data) => filteredCat = data.meals);

    filteredCat.forEach(dataCard => {
        filteredCatEl +=
            `<div class="col-md-6 col-lg-3 my-3">
                <div class="w-100 text-decoration-none text-black" href="#"  >
                    <div class="mainDiv">
                        <img class="w-100 h-100" src="${dataCard.strMealThumb}" alt="" />
                        <div class="category-overlay text-center py-3">
                        <h3>${dataCard.strMeal}</h3>
                        </div>
                    </div>
                </div>
            </div>`

    })
    categoriesContainer.html(filteredCatEl)

}


// Area Target Bage

async function getAreaCatigory(e, ) {

    let areaCategoryMeal = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    let oneAreaCategory = await areaCategoryMeal.json()




    console.log(oneAreaCategory)


}