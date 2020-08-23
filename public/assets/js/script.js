$(function () {
    $(".devour").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        let eaten = $(this).data("devoured");

        let beenEaten = {
            devoured: eaten
        };
      
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: beenEaten
        }).then(
            function () {
                console.log("eaten burger!");
                location.reload();
            }
        );
    });
        $(".submit").on("click", function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#textarea1").val().trim(),
            devoured: false
        };
        $.ajax("api/burgers", {
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