function cleanCell(){
    var targetCell, canvas;

    canvas = $('#pixelCanvas');
    targetCell = canvas.find('td');

    targetCell.on('click', function(){
        $(this).css('background-color', 'white');
    })
}

// Button Events

// Erase Cell
eraseCell = $('.eraser-button');
$(eraseCell).on('click', function(event){
    event.preventDefault();
    cleanCell();
});


// Remove border

var removeBorder;
removeBorder = $('.undoBorder');
$(removeBorder).on('click', function(){
    $('td, tr, table').css('border', 'none');
    // $('tr').css('border', 'none');
})

// Add border

var addBorder;
addBorder = $('.redoBorder');
$(addBorder).on('click', function(){
    $('td, tr, table').css('border', '1px solid black');
    // $('tr').css('border', '1px solid black');
})

