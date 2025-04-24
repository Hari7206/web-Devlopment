// Here we have to put the all the code in the document because sometimes our code excute before the page run so for that we make our document ready first only after that we can run our code 
// so this is the only right way to write the code other sometime it will make conflict 
$('document').ready(function () {
    $('.query').click(function () {
        console.log("  you have clicked on the heading ");
        $(this).hide()
    })
    // so in the js we have three type of the main selector and different kind of the selectr
    /*
    The main three types of the selector are
    id selector - in which we select by the id 
    element selector - in this we select the element tag like the h2 or p 
    class - in this we select the class 
    these are the main three then we have other 2-3 simple selector like

    * star slector which is mainly use to select the all type of element does not matter its id or the class

    then our      first selector  which use to select the first element of the selected element 
     */



    //  like same as this we can also use the this in the js this is use to target the current code in the java script or programming language and we have hide funtion also which use to hide the anhy clicked function

    //  also we can select the id or class in the js query which makes the code more easy to get any element and the id 
    $('#nin').click(function () {
        console.log(" nin was sleeping dont disturb");

    })
    $('.main').click(function () {
        console.log(" Hellow there how can i help you ");

    })
    $('.dbl').dblclick(function () {
        console.log(" hey there is a query file where you are going to learn about event ");

        // same as this we also have the more mouse event like mouse leave or mouse up and down where they work as the click on mouse or by other activities 

    })
    $('.btn').on(
        {
            click: function () {
        console.log("Your every click mean to us")
        
    },
    mouseleave: function () {
        console.error("But dont dare to click again")
    }
})

// hide and show function . so it can be very useful function for the js because it can use to hide or even show the file to the user 

$('.wiki').hide(function () {
    console.log(" your file is hidden for sometime");
    
})
$('.wiki').show(5000 ,function () {
    console.log(" Now your file is shown to you ");
    
})


// next we see we can add the toggle to the button so it make our website more amazing for the use
$('.edit').hide();
$('.buton').click(function () {
    $('.edit').toggle(5000);
})
// similar to this we have more function like fade in fade out and all 
// we also have some other cool function like'
//  slide up from which we can make down our text or anything or with the slide up the text or any other element will shown as in the up and if we do the fucntion slide toggle is make it vice versa if the slide is on the down it will come at the up and if it is on the up it will go down 

// one more function we can use this is an animate option

$('note').animate({
        opacity: 50 ,
        height: "45px" ,
        width: "10px"
},5000)
//  and we have more function of the animate the name is ques . In this if we put the every animate value in single single line they also work line by line that also make a good effect for the web pages 

// here we see how can we get the data of the js query by the help of get function of the ajax function
})
