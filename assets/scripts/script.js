// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    $('#currentDay').text(dayjs().format('DD/MM/YYYY h:mm:ss A'));  
    setInterval(function(){
        $('#currentDay').text(dayjs().format('DD/MM/YYYY h:mm:ss A'));
    }, 1000);

    setColors();
});


function setColors()
{
    const timeBlocks = document.querySelectorAll('.time-block');

    timeBlocks.forEach(block => {
        var timeID = block.getAttribute('id').split('-');

        if(parseInt(timeID[1]) < dayjs().$H)
        {
            block.classList.add('past');
        }
        else if(parseInt(timeID[1]) > dayjs().$H)
        {
            block.classList.add('future');
        }
        else
        {
            block.classList.add('present');
        }
        
    });
}