let items = [];

const check = () => {
    let newItem = document.getElementById("i").ariaValueMax;
    let bool;
    let message; 

    items.map((item,index)=>{
        (item == newItem) ? bool = false : bool = true;
    });

    (bool) ? message = "Item has Been Added" : "Item Already exists";

    items.push(newItem);

    document.getElementById("h").innerHTML = message;

    console.log(items);


}

