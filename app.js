//get gitgub user API details and display them on the page
//try with paul

document.getElementById("btn-search").addEventListener("click", getUser);

function getUser() {
  let input = document.getElementById("input-search");
  let username = input.value;
  let url = `https://api.github.com/users/${username}`;
  const err = document.getElementsByClassName("error");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.message === "Not Found") {
        err[0].innerHTML = "No results";
      } else {
        err[0].innerHTML = "";
        document.getElementById("user-name").innerHTML = data.name || "n/a";
        document.getElementById("user-image").src = data.avatar_url;
        document.getElementById("login").innerHTML = `@${data.login}`;
        document.getElementById("login").href = data.html_url;

        let date = new Date(data.created_at);
        let year = date.getFullYear();
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let month = months[date.getMonth() + 1];
        let dt = date.getDate();

        document.getElementById(
          "joined"
        ).innerHTML = `Joined ${dt} ${month} ${year}`;

        document.getElementById("user-bio").innerHTML =
          data.bio || "This profile has no bio";

        document.getElementById("user-repos").innerHTML =
          data.public_repos || "n/a";
        document.getElementById("user-followers").innerHTML =
          data.followers || "n/a";
        document.getElementById("user-following").innerHTML =
          data.following || "n/a";

        document.getElementById("user-location").innerHTML =
          data.location || "Not available";

        document.getElementById("user-twitter").innerHTML =
          data.twitter_username || "Not available";

        document.getElementById("user-blog").innerHTML =
          data.blog || "Not available";
        document.getElementById("user-blog").href = data.blog;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
