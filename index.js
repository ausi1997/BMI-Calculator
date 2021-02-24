function Cal_Love(){

    var name = document.getElementById('name').value;
    var lovename = document.getElementById('lovename').value;

    if(name == ""){
        alert('Please Enter your name...');
    }
    else if(name.length <=2){
        alert('Min length is 3...');
    }
    else if(!isNaN(name)){
        alert('Only Characters...');
    }
    else if(lovename == ""){
        alert('Please Enter your love name...');
    }
    else if(lovename.length <=2){
        alert('Min length is 3...');
    }
    else if(!isNaN(lovename)){
        alert('Only Characters...');
    }
else{
    var random = Math.random();
    var lovePercent = Math.floor(random*100);
    document.getElementById('love%').value = lovePercent + "%";
}
}
