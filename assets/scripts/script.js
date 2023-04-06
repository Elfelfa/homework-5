// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    $('#currentDay').text(dayjs().format('DD/MM/YYYY h:mm:ss A'))  
    setInterval(function(){
        $('#currentDay').text(dayjs().format('DD/MM/YYYY h:mm:ss A'));
    }, 1000);

    setColors();
    loadContents();

    var saveButtons = document.querySelectorAll('.saveBtn');

    saveButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            saveContents();
        });
    });
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

function saveContents()
{
    localStorage.clear();

    var descriptions = document.querySelectorAll('.description');
    var descText = [];

    descriptions.forEach(element => {
        descText.push(element.value);
    });

    localStorage.setItem('data', JSON.stringify(descText));
}

function loadContents()
{
    var data = JSON.parse(localStorage.getItem('data'));
    var descriptions = document.querySelectorAll('.description');
    var i = 0;

    if (data[0] != null)
    {
        data.forEach(text => {
            descriptions[i].innerHTML = text;
            i++;
        });
    };
}