 let count = 1;         //variavel

document.getElementById("radio1").checked = true;   /*marca o radio button 1 
                                                    como selecionado quando a página carrega*/
setInterval( function(){
    nextImage();                                    //chama a função nextImage() a cada 5 seg
}, 5000)


function nextImage(){                                            //funçao princial pra mudar slide
    count++;                                                     //aumenta em 1 o contador
    if(count>3){            
        count = 1;                                              //loop infinito      
    }

    document.getElementById("radio"+count).checked = true;      //conecta o JavaScript ao HTML
}