

let items = [

    { 
        id: 1, 
        html: `  <div class="col-md-4 mb-3 ">
        <div class="card bg-primary text-light">
            <h5 class="card-title text-start mx-3 mt-4">card title</h5>
            <div class="card-body d-flex align-items-center ">





                <p class="card-text">Lorem, ipsum dolor sit <br> amet consectetur <br> adipisicing elit. Dolor,
                    <br> ipsa
                </p>


                <button class="btn btn-primary bg-danger mx-auto" id="b1">delete</button>

            </div>
        </div>
    </div>`,  
    
    },

    { 
        id: 2, 
        html: `  <div class="col-md-4 mb-3 "  >
        <div class="card bg-primary text-light">
            <h5 class="card-title text-start mx-3 mt-4">card title</h5>
            <div class="card-body d-flex align-items-center ">





                <p class="card-text">Lorem, ipsum dolor sit <br> amet consectetur <br> adipisicing elit. Dolor,
                    <br> ipsa
                </p>


                <button class="btn btn-primary bg-danger mx-auto" id="b2">delete</button>

            </div>
        </div>
    </div>`,  
    
    },
    { 
        id: 3, 
        html: `  <div class="col-md-4 mb-3">
        <div class="card bg-primary text-light">
            <h5 class="card-title text-start mx-3 mt-4">card title</h5>
            <div class="card-body d-flex align-items-center ">





                <p class="card-text">Lorem, ipsum dolor sit <br> amet consectetur <br> adipisicing elit. Dolor,
                    <br> ipsa
                </p>


                <button class="btn btn-primary bg-danger mx-auto" id="b3">delete</button>

            </div>
        </div>
    </div>`,  
    
    },
    { 
        id: 4, 
        html: `  <div class="col-md-4 mb-3  ">
        <div class="card bg-primary text-light">
            <h5 class="card-title text-start mx-3 mt-4">card title</h5>
            <div class="card-body d-flex align-items-center ">





                <p class="card-text">Lorem, ipsum dolor sit <br> amet consectetur <br> adipisicing elit. Dolor,
                    <br> ipsa
                </p>


                <button class="btn btn-primary bg-danger mx-auto" id="b4">delete</button>

            </div>
        </div>
    </div>`,  
    
    },

  ];


function create_cards(child_div){


var element = document.getElementById("parent");

element.innerHTML += child_div;


}







document.addEventListener("DOMContentLoaded", function() {

    //create cards
   for (var i = 0; i < items.length; i++) {
    create_cards(items[i].html)
    }
    

   initialize_buttons();
   initialize_themes();  

  });

  function delete_parent(e){
   
    var parentElement = e.target.parentNode.parentNode;
    
    parentElement.remove();
  
        
    }

  function initialize_buttons(){

    var buttons = document.getElementsByClassName("btn")

    for (var i = 0; i < buttons.length;i++)
    {
        var b = buttons[i];
        b.addEventListener('click',delete_parent)
      
    
    }  
}
   
  function initialize_themes(){
    var themes = document.getElementsByClassName("circle-btn")

    for(var i=0 ; i<themes.length; i++){
        var theme = themes[i];
        theme.addEventListener('click',change_theme)
    }


  }
  
    function change_theme(e){

        var div_button = e.target.id;
       
        
       
        
        if(div_button =='yellow'){

            var cards = document.querySelectorAll('.card.bg-primary');

            for(var i=0 ; i<cards.length; i++){
                var card = cards[i];
                card.classList.remove('bg-primary'); 
                card.classList.add('bg-warning');
            }

        }
   
        else if(div_button =='blue'){
          
            var cards = document.querySelectorAll('.card.bg-warning');

            for(var i=0 ; i<cards.length; i++){
                var card = cards[i];
                card.classList.remove('bg-warning'); 
                card.classList.add('bg-primary');
            }

        }

    }




  

  