var products =[
    {
        title:"Coffee",
        description:"Expresso, Cappuccino, Macchiato, & Latte" ,
        img:"./assets/img/coffee.jpg"
    },

    {
        title:"Baguettes",
        description:"Pizza Baguettes",
        img:"./assets/img/baguettes.jpeg"
    },

    {
        title:"Tisanes",
        description:"Fruit tisanes" ,
        img:"./assets/img/tisanas.jpg"
    },

    {
        title:"Burger",
        description:"Artisan Burger" ,
        img:"./assets/img/burger.jpg"
    },

    {
        title:"Lemonade",
        description:"Pink lemonade" ,
        img:"./assets/img/lemonade.jpg"
    },

    {
        title:"Pancakes",
        description:"Pancakes" ,
        img:"./assets/img/pancakes.jpg"
    },
];

function mostrarModal(numero){
    $(".modal").modal("show");
    var title = products[numero]["title"];
    var description = products[numero]["description"];
    var img = products[numero]["img"];

    $("#txtTitle").html(title);
    $("#txtDescription").html(description);
    $('#imgProduct').attr('src',img);
} 
