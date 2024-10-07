//https://api.github.com/users/  => yeh github ki api hai

document.getElementById('button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('userAvatar').src = data.avatar_url;
                document.getElementById('userName').textContent = data.name || "No name provided";
                document.getElementById('userBio').textContent = data.bio || "No bio provided";
                document.getElementById('followersCount').textContent = data.followers;
                document.getElementById('followingCount').textContent = data.following;
                document.getElementById('reposCount').textContent = data.public_repos;
                document.getElementById('profileLink').href = data.html_url;
                document.querySelector('.secondDiv').style.display = 'block';
            })
            .catch(error => console.error('Error:', error));
    }
});
