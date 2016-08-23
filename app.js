function generate_grid() {
    grid.empty();

    var size = $('#grid_size').val();
    var color = $('#color_choice option:selected').text();

    if (isNaN(size)) {
        alert('Stop you criminal scum!');
        return;
    }

    for (var i = 0; i < size; i++) {
        var row = $('<tr class="row"></tr>');

        for (var j = 0; j < size; j++) {
            var td = $('<td class="elem"></td>');
            td.appendTo(row);
        }
        row.appendTo(grid);
    }
    $('.elem').mouseenter(function () {
        $(this).fadeTo(500, 0, function() {
            $(this).css('opacity', 1)
        });
    }).mouseleave(function() {
        $(this).css('background-color', color);
    });
}

$(document).ready(function() {
    generate_grid();
});
var grid = $('#grid');


$('#generate').click(generate_grid);
