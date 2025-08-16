// main.js
fetch('_data/updates.json')
  .then(res => res.json())
  .then(posts => {
    const list = document.getElementById('updates-list');
    posts.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `<time datetime="${post.date}">${post.dateReadable}</time>
                      <h3>${post.title}</h3>
                      <p>${post.excerpt}</p>`;
      list.appendChild(li);
    });
  });