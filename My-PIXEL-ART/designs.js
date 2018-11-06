function makeGrid(){
    event.preventDefault();
    
    let canvas, height, width, cell, row;

    canvas = $('#pixelCanvas');
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();

    canvas.children().remove();
    canvas.css('border', '1px solid black');

    for (let i = 0; i < height; i++){
        canvas.append('<tr></tr>');
    }

    row = $('tr');

    for (let y = 0; y < width; y++) {
        row.append('<td></td>');
    } 

    // Add color to cell
    cell = $('#pixelCanvas').find('td');
    
    cell.on('click', function(){
        let colorPicker = $('#colorPicker').val();
        $(this).css('background-color', colorPicker); 
    })
    // Function to change color
    function addColor(){
        cell.on('click', function(){
            let selectedColor = $('#colorPicker').val();
            $(this).css('background-color', selectedColor);   
        })
    
    }
    // Button event to change color
    var paintCell;    
    paintCell = $('#colorPicker');
    $(paintCell).on('change', function(  ){
        addColor();
    });

    // Function for Eraser
    function cleanCell(){
        let canvas = $('#pixelCanvas');
        let targetCell = canvas.find('td');
        targetCell.on('click', function(){
            $(this).css('background-color', 'white');
        })
    }
    // Button Evnt for eraser
    let eraseCell = $('.eraser-button');
    $(eraseCell).on('click', function(event){
        event.preventDefault();
        cleanCell()
    });

    // Remove border

    var removeBorder;
    removeBorder = $('.undo-border');
    $(removeBorder).on('click', function(){
        $('table, tr, td').css('border', 'none');
        // $('tr').css('border', 'none');
    })

    // Add border

    let addBorder;
    addBorder = $('.redo-border');
    $(addBorder).on('click', function(){
        $('table, tr, td').css('border', '1px solid black');
    })   

    // Change Border Color
    var chosenColor;
    $('#borderColor').on('change', function(){
        chosenColor = $('#borderColor').val();
        $('table, tr, td').css('border', chosenWidth + 'px solid ' + chosenColor)
    })
    // Change Border Color
    var chosenWidth;
    $('#borderWidth').on('change', function(){
        
        chosenWidth = $('#borderWidth').val();
        if ($('#borderColor').val() === "#000000"){
            $('table, tr, td').css('border', chosenWidth + 'px solid black');
        }else{
            $('table, tr, td').css('border', chosenWidth + 'px solid ' + chosenColor);
        }
        // chosenWidth = $('#borderWidth').val();
    })
}

makeGrid();

        // var makeCanvas = $('input[type="submit"]');
        // $(makeCanvas).on('click', function(event){
        //     event.preventDefault();
        //     makeGrid();
        //  });


















// var canvas, inputHeight, inputWidth;
// function makeGrid() {

//         canvas = $('#pixelCanvas');
//         inputHeight = $('#inputHeight').val();
//         inputWidth = $('#inputWeight').val();

//         canvas.children().remove();

//         for (x = 0; x < inputHeight; x++){
//             canvas.append('<tr></tr>');
//         }
        
//         var tableRow = $('tr');
        
//         for (y = 0; y < inputWidth; y++) {
//             tableRow.append('<td></td>');
//         } 
// }
// var createCanvas;
// createCanvas = $('input[type="submit"]');
// $(createCanvas).on('click', function(event){
//     event.preventDefault();
//     makeGrid();
// });