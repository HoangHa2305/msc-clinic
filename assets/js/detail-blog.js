$(document).ready(function(){
    $(".btn-show").click(function() {
        var $showElement = $(this).closest(".item__1000005670").find(".item__1000005670-show");

        if ($showElement.css('max-height') === '0px') {
            $(this).find('rect').css('fill','#1AB7DA');
            $(this).find('path').css('stroke','white');

            $(this).css({
                "transform": "rotate(180deg)",
                "transition": "0.5s ease-in-out"
            });
            $showElement.css('max-height', '6.69rem'); 
        } else {
            $(this).css({
                "transform": "rotate(0deg)",
                "transition": "0.5s ease-in-out"
            });
            $(this).find('rect').css('fill','white');
            $(this).find('path').css('stroke','#1AB7DA');

            $showElement.css('max-height', '0');
        }
    })
});