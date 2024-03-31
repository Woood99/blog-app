import Component from "../modules/Component";
import {
    apiService
} from "../services/api.service";
import {
    TransformService
} from "../services/transform.service";
import renderPost from "../templates/post.template";
export default class PostsComponent extends Component {
    constructor(id, {
        loader
    }) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.el.addEventListener('click', buttonHandler.bind(this));
    }

    async onShow() {
        this.loader.show();
        const data = await apiService.fetchPosts();
        if (!data) {
            this.loader.hide();
            this.el.insertAdjacentHTML('afterbegin', `<p class="center">Вы пока не создали пост</p>`);
            return;
        }
        const posts = TransformService.dataObjectToArray(data);
        const html = posts.map(post => renderPost(post, {
            withButton: true
        }));
        this.loader.hide();
        this.el.insertAdjacentHTML('afterbegin', html.join(' '));
    }

    onHide() {
        this.el.innerHTML = '';
    }
}

function buttonHandler(e) {
    const target = e.target;
    const id = target.dataset.id;
    const title = target.dataset.title;
    if (id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const candidate = favorites.find(post => post.id === id);
        if (candidate) {
            target.textContent = 'Сохранить';
            target.classList.add('button-primary');
            target.classList.remove('button-danger');
            favorites = favorites.filter(post => post.id !== id);
        } else {
            target.textContent = 'Удалить';
            target.classList.remove('button-primary');
            target.classList.add('button-danger');
            favorites.push({
                id,
                title
            });
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}