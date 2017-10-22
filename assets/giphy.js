// $(document).ready(function(){

       // Initial array of fruits
      var fruit = ["Apple", "Pear", "Strawberry", "Peach"];

      function renderButtons(){


        // Deleting the fruits prior to adding new fruit
        // (this is necessary otherwise we will have repeat buttons)
        $("#fruitview").empty();
      	// Looping through the array of fruits
        for (var i = 0; i < fruit.length; i++) {

          // Then dynamicaly generating buttons for each fruit in the array
          
          var a = $("<button>");
          // Adding a class of fruit to our button
          a.addClass("fruits");
          // Adding a data-attribute
          a.attr("data-name", fruit[i]);
          // Providing the initial button text
          a.text(fruit[i]);

           $("#fruitview").append(a);
      }
  };
      
        
      // Generic function for capturing the fruit name from the data-attribute
      // function alertFruitName() {
      //   var fruitName = $(this).attr("data-name");
      // }

      // This function handles events where one button is clicked
      $(document).on("click", ".fruits", function(event) {
        // Preventing the buttons default behavior when clicked 
        event.preventDefault();
     	// var x = $(this).attr("#fruit");

       var fruitName = $(this).attr("data-name")

     // when you console.log(fruit), it gives you the fruit array. But it does not give you the new button you added. 
     	

     	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+fruitName+ "&api_key=dc6zaTOxFJmzC&limit=10";

      console.log(queryURL);

     

     	$.ajax({url:queryURL, method: 'Get'})
     		.done(function(response){

     		var results = response.data;


        // Looping through the array of fruits
        for (var i = 0; i < results.length; i++) {

          // Then dynamicaly generating buttons for each fruit in the array
          //appears to be making 10 buttons and only lets you create 10 buttons
          
          // var a = $("<button>");
          // // Adding a class of fruit to our button
          // a.addClass("fruits");
          // // Adding a data-attribute
          // a.attr("data-name", fruit[i]);
          // // Providing the initial button text
          // a.text(fruit[i]);
          // // Adding the button to the HTML
          // $("#fruitview").append(a);

          var rating= results[i].rating;

          // var stillImg = results[i].images.downsized.url;

          // var fruitImg = $("<img>");

          // fruitImg.attr("src",stillImg);
          // fruitImg.attr("data-still", stillImg)
          

          $('body').append("<p>Rating "+ rating+"</p>");
       	  $('body').append("<img src='"+results[i].images.downsized.url+"'.>");
          }
     		})


      });

      // Calling the renderButtons function to display the intial buttons
 
  // });
  
   $("#add-fruit").on("click",function(){
          event.preventDefault();
          console.log("added fruit");
        // // This line grabs the input from the textbox
        var fruits = $("#fruit-input").val().trim();

        // // Adding the fruit from the textbox to our array
        fruit.push(fruits);

        // Calling renderButtons which handles the processing of our fruit array
        renderButtons();
  
        })

       renderButtons();