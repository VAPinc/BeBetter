$(function () {
    // get all habits for a user with date's progress - get '/:user_id/:date'

    // create new user - '/api/users/new'
    $(".create_user").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newUser = {
            fName: $("#f_name").val().trim(),
            lName: $("#l_name").val().trim(),
            gender: $("#gender").val().trim(),
            pswd: $("#password").val().trim()
        };

        $.ajax("/api/users/new", {
            type: "POST",
            data: newUser
        }).then(
            function () {
                console.log("created new user");
                // Reload the page to get the updated list
                location.reload();
            });
    });

    //add a new habit for user - post '/api/habits/new'
    $(".create_habit").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newHabit = {
            user_id: $(".create_habit").attr("user_id"),
            habit_description: $("#habit_desc").val().trim(),
            data_type: $("#type").attr("data_type"),
            frequency: $("#frequency").attr("frequency")
        };

        $.ajax("/api/habits/new", {
            type: "POST",
            data: newHabit
        }).then(
            function () {
                console.log("created new habit");
                // Reload the page to get the updated list
                location.reload();
            });
    });

    // delete one habit - delete "/api/habits/:habit_id"
    $(".delete_habit").on("click", function (event) {
        let habit_id = $(this).data("habit_id");

        // Send the DELETE request.
        $.ajax("/api/habits/" + habit_id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                // Reload the page to get the updated list
                location.reload();
            });
    });

    //provide progress for one habit for one user for whole period - get '/api/stats/:habit_id'
    $(".stats").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        $.ajax("/api/stats/" + habit_id, {
            type: "GET",
            data: newHabit
        }).then(
            function (response) {
                console.log("received stats", response);
                // Reload the page to get the updated list
                // location.reload();
            });
    });

    //add progress for all habits for one user for one day - post '/api/:user_id/stats/:date'
    $("#delete").on("click", function (event) {
        let habit_id = $(this).data("habit_id");

        let newSleepState = {
            sleepy: newSleep
        };

        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(
            function () {
                console.log("changed sleep to", newSleep);
                // Reload the page to get the updated list
                location.reload();
            }
            );
    });
})