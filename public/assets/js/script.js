$(function () {
    $(".devour").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        console.log(id);
        let eaten = {
            devoured: true
        };
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: eaten
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
            // devoured: 0
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