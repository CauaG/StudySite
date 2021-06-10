document.addEventListener('DOMContentLoaded', day())
var dayId;

function day(page){

    var day = document.querySelector('#day')
    var date = new Date;

    switch(date.getDay()){

        case 0:

            if(page != null){
                day.innerHTML = 'Hoje é Domingo'
            }  

            dayId = 0
            break;

        case 1: 
            
            if(page != null){
                day.innerHTML = 'Hoje é Segunda'
            }

            dayId = 1
            break;

        case 2:
            if(page != null){
                day.innerHTML = 'Hoje é Terça'
            }

            dayId = 2
            break;
        
        case 3:
            if(page != null){
                day.innerHTML = 'Hoje é Quarta'
            }

            dayId = 3
            break;
        
        case 4:
            if(page != null){
                day.innerHTML = 'Hoje é Quinta'
            }
            
            dayId = 4
            break;

        case 5:
            if(page != null){
                day.innerHTML = 'Hoje é Sexta'
            }

            dayId = 5
            break;
        
        case 6:
            if(page != null){
                day.innerHTML = 'Hoje é Sábado'
            }

            dayId = 6
            break;
    }
    
}

function access(id, mat){
    
    if(id == 0 && mat == null){
        location = '/HTML/select.html';
    } else {

        location = `/HTML/Mats/${mat}/${dayId}.html`

    }
    
}