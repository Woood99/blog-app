import Component from "../modules/Component";
import {
    apiService
} from "../services/api.service";
import renderPost from "../templates/post.template";

export default class FavoriteComponent extends Component {
    constructor(id, {
        loader
    }) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.el.addEventListener('click', linkHandler.bind(this));
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        this.el.insertAdjacentHTML('afterbegin', renderList(favorites));
    }

    onHide() {
        this.el.innerHTML = '';
    }
}

async function linkHandler(e) {
    e.preventDefault();
    const link = e.target.closest('.js-link');
    if (link) {
        const postId = link.dataset.id;
        this.el.innerHTML = '';
        this.loader.show();
        const post = await apiService.fetchPostById(postId);
        this.loader.hide();
        this.el.insertAdjacentHTML('afterbegin', renderPost(post,{
            withButton: false
        }));
    }
}

function renderList(list = []) {
    if (list && list.length) {
        return `
            <ul>
                ${list.map(item => `<li><a href="#" class="js-link" data-id="${item.id}">${item.title}</a></li>`).join(' ')}
            </ul>
        `;
    }

    return `
        <p class="center">
            Вы пока ничего не добавили
        </p>
    `;
}

