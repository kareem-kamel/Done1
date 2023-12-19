function generate_error(error_list) {
    return `<p>${error_list}</p>`;
}


var lo = document.getElementById("signup");

lo.onclick = function (ev) {

    var username = document.getElementById("user");
    var password = document.getElementById("pass");
    var er = document.getElementById("err");
    var er2 = document.getElementById("err2")

    var usernametxt = username.value.trim();
    var passwordtxt = password.value.trim();

    er.innerHTML = "";
    er2.innerHTML = "";

    let error_list = [];
    if (usernametxt.length <= 0) {
        error_list.push(" User is required!");
    }

    else if (usernametxt.length < 5) {
        error_list.push(" Username should be at least 5 char!");
    }

    let error_list2 = [];

    if (passwordtxt.length <= 0) {
        error_list2.push(" pass is required");
    }
    else if (passwordtxt.length < 5) {
        error_list2.push("pass should be at least 5 char!");
    }

    if (error_list.length > 0) {
        ev.preventDefault();

        var errorHTML = generate_error(error_list);
        er.insertAdjacentHTML("afterbegin", errorHTML);


    }
    else if (error_list2.length > 0) {
        var errorpass = generate_error(error_list2);
        er2.insertAdjacentHTML("afterbegin", errorpass);

    }
    else {
        ev.preventDefault();

        window.open("login.html");

    }
};
