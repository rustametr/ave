let list_button_1 = document.querySelectorAll('.header_nav_item_title_container')[0];
let list_button_2 = document.querySelectorAll('.header_nav_item_title_container')[1];

let list_button_title_1 = document.querySelectorAll('.header_nav_item_title')[0];
let list_button_title_2 = document.querySelectorAll('.header_nav_item_title')[1];

let list_button_arrow_1 = document.querySelectorAll('.header_nav_item_title_arrow')[0];
let list_button_arrow_2 = document.querySelectorAll('.header_nav_item_title_arrow')[1];
let list_button_arrow_3 = document.querySelectorAll('.header_nav_item_title_arrow')[2];
let list_button_arrow_4 = document.querySelectorAll('.header_nav_item_title_arrow')[3];


let lists_array = document.querySelectorAll('.header_nav_list');

let list_buttons_array = document.querySelectorAll('.header_nav_item_title_container');

list_button_1.addEventListener('click', function(){
    if(list_button_1.classList.contains('active') == false){
        for(let i = 0;i<lists_array.length;i++){
            if(lists_array[i].classList.contains('hidden') == false){
                lists_array[i].classList.add('hidden');
            }
        }
        for(let i = 0;i<list_buttons_array.length;i++){
            if(list_buttons_array[i].querySelector('.header_nav_item_title').classList.contains('active_nav_item_title')){
                list_buttons_array[i].querySelector('.header_nav_item_title').classList.remove('active_nav_item_title');
            }
            if(list_buttons_array[i].querySelector('.header_nav_item_title_arrow').classList.contains('active_nav_item_arrow')){
                list_buttons_array[i].querySelector('.header_nav_item_title_arrow').classList.remove('active_nav_item_arrow');
            }
        }
    
        lists_array[0].classList.remove('hidden');
        lists_array[0].classList.add('show_list');
        list_button_title_1.classList.add ('active_nav_item_title');
        list_button_arrow_1.classList.add('active_nav_item_arrow');

        for(let i = 0; i<list_buttons_array.length; i++){
            if(list_buttons_array[i] != list_button_1){
                list_buttons_array[i].classList.remove('active');
            }
        }

        list_button_1.classList.add('active');
    }else{
        lists_array[0].classList.add('hidden');
        lists_array[0].classList.remove('show_list');
        list_button_title_1.classList.remove('active_nav_item_title');
        list_button_arrow_1.classList.remove('active_nav_item_arrow');
        list_button_1.classList.remove('active');
    }
});

list_button_2.addEventListener('click', function(){
    if(list_button_2.classList.contains('active') == false){
        for(let i = 0;i<lists_array.length;i++){
            if(lists_array[i].classList.contains('hidden') == false){
                lists_array[i].classList.add('hidden');
            }
        }
        for(let i = 0;i<list_buttons_array.length;i++){
            if(list_buttons_array[i].querySelector('.header_nav_item_title').classList.contains('active_nav_item_title')){
                list_buttons_array[i].querySelector('.header_nav_item_title').classList.remove('active_nav_item_title');
            }
            if(list_buttons_array[i].querySelector('.header_nav_item_title_arrow').classList.contains('active_nav_item_arrow')){
                list_buttons_array[i].querySelector('.header_nav_item_title_arrow').classList.remove('active_nav_item_arrow');
            }
        }

        lists_array[1].classList.remove('hidden');
        lists_array[1].classList.add('show_list');
        list_button_title_2.classList.add ('active_nav_item_title');
        list_button_arrow_2.classList.add('active_nav_item_arrow');
        
        for(let i = 0; i<list_buttons_array.length; i++){
            if(list_buttons_array[i] != list_button_2){
                list_buttons_array[i].classList.remove('active');
            }
        }

        list_button_2.classList.add('active');
    }else{
        lists_array[1].classList.add('hidden');
        lists_array[1].classList.remove('show_list');
        list_button_title_2.classList.remove('active_nav_item_title');
        list_button_arrow_2.classList.remove('active_nav_item_arrow');

        list_button_2.classList.remove('active');
    }
});