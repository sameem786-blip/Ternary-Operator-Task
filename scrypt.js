var items = ["tissue","napkin"];

const check = () => {
    let newItem = document.getElementById("i").ariaValueMax;
    let bool;
    document.getElementById("h").innerHTML = "Add Items To Cart"

    console.log("check 1");
    for(let i=0;i<items.length;i++){
        bool = ((items[i] == newItem) ? false : true);
    }

    console.log(bool);
    console.log("check 4");
    
    if(bool){
        items.push(newItem);
    }else{
        document.getElementById("h").innerHTML = "Item Allready Present in Cart";
    }

    console.log(items);


}

