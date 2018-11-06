$(function(){

    // Select color input
    // Select size input
    // Define all variables

    var canvas, gridHeight, gridWidth, cell, rows;

    function makeGrid() {
        // Your code goes here!
        //What makeGrid should do

        canvas = $('#pixelCanvas');
        gridHeight = $('#inputHeight').val();
        gridWidth = $('#inputWeight').val();

        // When user enters input
        // Clear the canvas
        canvas.children().remove();
        canvas.css('border', '1px solid black');

        //Add table row
        for (i = 0; i < gridHeight; i++){
            canvas.append('<tr></tr>');
        }
        
        rows = $('tr');
        
        //Add table data
        for (y = 0; y < gridWidth; y++) {
            rows.append('<td></td>');
        } 

        // When the table data (td) is clicked
        cell = canvas.find('td');
        
        cell.on('click', function(){

            // Get selected color
            //Add color to td
            // $(this).attr('bgcolor', selectedColor)

                var selectedColor;
                selectedColor = $('#colorPicker').val();
                $(this).css('background-color', selectedColor);
            
        })
    }








    function cleanCell(){
        var targetCell, canvas;

        canvas = $('#pixelCanvas');
        targetCell = canvas.find('td');

        targetCell.on('click', function(){
            $(this).css('background-color', 'white');
        })
    }

    function addColor(){
        cell.on('click', function(){

            // Get selected color
                var selectedColor;
                selectedColor = $('#colorPicker').val();

            //Add color to td
            // $(this).attr('bgcolor', selectedColor)
                $(this).css('background-color', selectedColor);   
        })
    
    }
    
    // Button Events
    var loadCanvas, eraseCell;

    // When size is submitted by the user, call makeGrid()
    // Prevent default action of submit button

    // Button Event to load canvas

        loadCanvas = $('input[type="submit"]');
        $(loadCanvas).on('click', function(event){
            event.preventDefault();
            makeGrid();
        });

    // Button Event to Erase Cell

        eraseCell = $('.eraser-button');
        $(eraseCell).on('click', function(event){
            event.preventDefault();
            cleanCell();
        });

    // Button Event to load color cell

        var paintCell;    
        paintCell = $('#colorPicker');
        $(paintCell).on('click', function(  ){
            // event.preventDefault();
            addColor();
        });

    // Remove border

        var removeBorder;
        removeBorder = $('.undoBorder');
        $(removeBorder).on('click', function(){
            $('table, tr, td').css('border', 'none');
            // $('tr').css('border', 'none');
        })

    // Add border

        var addBorder;
        addBorder = $('.redoBorder');
        $(addBorder).on('click', function(){
            $('table, tr, td').css('border', chosenWidth + 'px solid ' + chosenColor);
        })   

    // Change Border Color
    var chosenColor;
    $('#borderColor').on('change', function(){
        chosenColor = $('#borderColor').val();
        $('table, tr, td').css('border', '1px solid ' + chosenColor)
    })

    var chosenWidth;
    $('#borderWidth').on('change', function(){
        chosenWidth = $('#borderWidth').val();
        $('table, tr, td').css('border', chosenWidth + 'px solid ' + chosenColor);
    })

})