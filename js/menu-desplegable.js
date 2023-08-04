$(function(){
        //envoltorio para la funcion de jQuery
        (function($){
            $.fn.desplegable() = function(custom){
                //variable que permite la funcion para que no se quede abierto el menu
                var defaults = {
                    //variable por defecto que si no le pasamos nada se 
                    //kede abierto o cerrado segun lo que convenga
                    keepOpen: false,
                    //variable para iniciar uno de los item abierto
                    startingOpen:false
                }
                //variable settings extiende la variable defaults
                // con el valos custom que le pasamos
                // si no le pasamos ningun valor custom tome x defecto el
                // keepOpen:false               
                var settings = $.extend({}, defaults, custom);
                
                if(settings.startingOpen){                                    
                    $(settings.startingOpen).show();
                }
                return this.each(function(){
                    var obj = $(this);
                    //inseto el evento click sobro los enlaces dentro de li y a
                    $('li a', obj).click(function(event){                    
                     // le paso lo que hay dentro del enlace a la variable elem   
                       var elem = $(this).next();
                     // si el elemento es "ul" (osea que tiene otro elemento adentro  
                       if (elem.is('ul')){
                           //entonces que no siga al enlace                           
                           event.preventDefault();
                           //buscamos los objetos ul que esten visibles
                           //que no sean el mismo elemento
                           if (!settings.keepOpen){                               
                               obj.find('ul:visible').not(elem).not(elem.parents('ul:visible')).slideUp();
                           }
                           // y que se despliegue                           
                           elem.slideToggle();
                       }
                    })                   
                })
            }
        })(jQuey);

      $('.menu-vertical').desplegable({startingOpen:'#open'});//el plugin se llamara "desplegable" y realizara un evento sobre el elemento ".menu-vertical" 
 });