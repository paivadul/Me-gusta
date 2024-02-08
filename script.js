var count = [0,0,0];

function plusLike(i){
    count[i]++;
    var Element = document.querySelector('#countplus' + i);
    Element.innerText = count[i] + ' like(s)';
}