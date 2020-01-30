$('document').ready(function() {
    $('#reset').click(function() {

        var email = $('#resInp').val();
        $.ajax({
            type: "POST",
            url: "/forgot",
            data: { 'field': email },
            success: function(response) {

            },
            error: function(response) {

            }
        });
    })
});

function setProfilePic() {
    $('#profilepicid').click();
    $('#profilepicid').on('change', function() {
        $('#updatebtn').click();
    })
}

var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 40);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

//CHECK - Amrit
$(function() {

    var availableGames = [
        "Bond It", "Flag Up", "Iconic", "Colorista"
    ];

    $("#searchgameinput").autocomplete({
        source: availableGames,

    })
});

$('#searchbtn').click(function() {
    $('#submitbtn').click()
})