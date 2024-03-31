function renderPost(post, options = {}) {
  const tag = post.type === 'news' ?
    `<li class="tag tag-blue tag-rounded">Новость</li>` :
    `<li class="tag tag-rounded">Заметка</li>`;

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const candidate = favorites.find(currentPost => currentPost.id === post.id);

  const buttonDelete = `
    <button type="button" class="button-round button-small button-danger" data-remove-id=${post.id}>
      Удалить
    </button>
  `;

  const button = candidate ?
    `
        <button type="button" class="button-round button-small button-danger" data-id=${post.id} data-title="${post.title}">
            Удалить из избранного
        </button>
        ` :
    `
        <button type="button" class="button-round button-small button-primary" data-id=${post.id} data-title="${post.title}">
            Сохранить в избранное
        </button>
        `;
  return `
        <div class="panel">
            <div class="panel-head">
              <p class="panel-title">${post.title}</p>
              ${options.withButton ? buttonDelete : ''}
              <ul class="tags">
                ${tag}
              </ul>
            </div>
            <div class="panel-body">
              <p class="multi-line">${post.fulltext}</p>
            </div>
            <div class="panel-footer w-panel-footer">
              <small>${post.date}</small>
              ${options.withButton ? button : ''}
            </div>
        </div>
    `;
}


export default renderPost;