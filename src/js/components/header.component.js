import Component from "../modules/Component";

export default class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        if (localStorage.getItem('visited')) {
            this.hide();
            return;
        }
        const btn = this.el.querySelector('.js-header-start');
        btn.addEventListener('click', buttonHandler.bind(this));
    }
}



function buttonHandler() {
    localStorage.setItem('visited', true);
    this.hide();
}