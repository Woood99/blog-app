import Component from "../modules/Component";
import {
    apiService
} from "../services/api.service";
import {
    TransformService
} from "../services/transform.service";
import renderPost from "../templates/post.template";
export default class DeleteComponent extends Component {
    constructor(id, {
        loader
    }) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.el.addEventListener('click', buttonHandler.bind(this));
    }
}

async function buttonHandler(e) {
    e.preventDefault();
    const target = e.target.dataset.removeId;
    if (target) {
        this.el.innerHTML = '';
        this.loader.show();
        await apiService.deletePost(target);
        const data = await apiService.fetchPosts();
        this.loader.hide();
        if (data) {
            const posts = TransformService.dataObjectToArray(data);
            const html = posts.map(post => renderPost(post, {
                withButton: true
            }));
            this.el.insertAdjacentHTML('afterbegin', html.join(' '));
        } else {
            this.el.insertAdjacentHTML('afterbegin', `<p class="center">Вы пока не создали пост</p>`);
        }
    }
}