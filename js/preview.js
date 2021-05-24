let left_button = document.getElementById('left_slider_button');
let right_button = document.getElementById('right_slider_button');

let imgs_array = document.getElementsByClassName('main_product_img_container');

let select_top = document.getElementById('select_top');
let select_bottom = document.getElementById('select_bottom');
let select_number = document.getElementById('select_number');

let screenWidth = window.screen.width


select_top.addEventListener('click', function(){
    select_number.innerHTML = `${select_number_start+=1}`;
});

select_bottom.addEventListener('click', function(){
    if(select_number_start>1){
        select_number.innerHTML = `${select_number_start-=1}`;
    } 
});

if(screenWidth >= 700){
    left_button.addEventListener('click', function(){
        if(imgs_array[1].classList.contains('active')){
            imgs_array[1].style.transform = 'translate(-27.81vw, -34.639vw)'
            imgs_array[2].style.transform = 'translate(0, -69.278vw)';
            imgs_array[1].classList.remove('active');
            imgs_array[2].classList.add('active');
        }if(imgs_array[0].classList.contains('active')){
            imgs_array[1].style.transform = 'translate(0, -34.639vw)'
            imgs_array[0].style.transform = 'translate(-27.81vw, 0)';
            imgs_array[0].classList.remove('active');
            imgs_array[1].classList.add('active');
        }
    });

    right_button.addEventListener('click', function(){
        if(imgs_array[1].classList.contains('active')){
            imgs_array[1].style.transform = 'translate(27.81vw, -34.639vw)'
            imgs_array[0].style.transform = 'translate(0, 0)';
            imgs_array[1].classList.remove('active');
            imgs_array[0].classList.add('active');
        }if(imgs_array[2].classList.contains('active')){
            imgs_array[1].style.transform = 'translate(0, -34.639vw)'
            imgs_array[2].style.transform = 'translate(27.81vw, -69.278vw)';
            imgs_array[2].classList.remove('active');
            imgs_array[1].classList.add('active');
        }
    });
}else{
    left_button.addEventListener('click', function(){
        if(imgs_array[1].classList.contains('active')){
            imgs_array[1].style.transform = 'translate(-55.62vw, -69.278vw)'
            imgs_array[2].style.transform = 'translate(0, -138.556vw)';
            imgs_array[1].classList.remove('active');
            imgs_array[2].classList.add('active');
        }if(imgs_array[0].classList.contains('active')){
            imgs_array[1].style.transform = 'translate(0, -69.278vw)'
            imgs_array[0].style.transform = 'translate(-55.62vw, 0)';
            imgs_array[0].classList.remove('active');
            imgs_array[1].classList.add('active');
        }
    });
    right_button.addEventListener('click', function(){
        if(imgs_array[1].classList.contains('active')){
            imgs_array[1].style.transform = 'translate(55.62vw, -69.278vw)'
            imgs_array[0].style.transform = 'translate(0, 0)';
            imgs_array[1].classList.remove('active');
            imgs_array[0].classList.add('active');
        }if(imgs_array[2].classList.contains('active')){
            imgs_array[1].style.transform = 'translate(0, -69.278vw)'
            imgs_array[2].style.transform = 'translate(55.62vw, -138.556vw)';
            imgs_array[2].classList.remove('active');
            imgs_array[1].classList.add('active');
        }
    });
}