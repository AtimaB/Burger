$(function () {
    $(".devour").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");

        let eaten = {
            devoured: true
        };
        $ajax("/api/burgers" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                console.log("eaten burger!");
                location.reload();
            }
        );
    });

    $("submitBurger").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#create-burger").val().trim(),
            devoured: 0
        };
        $ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger!");
                location.reload();
            }
        );
    });


})
