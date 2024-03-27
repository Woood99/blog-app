import Component from "../modules/Component";


export default class NavigationComponent extends Component {
    constructor(id) {
        super(id);

        this.tabs = [];
    }
    init() {
        this.el.addEventListener('click', tabHandler.bind(this));
    }

    registerTabs(tabs) {
        this.tabs = tabs;
    }
}



function tabHandler(e) {
    e.preventDefault();
    const tab = e.target.closest('.tab');
    if (tab) {
        const tabs = Array.from(this.el.querySelectorAll('.tab'));
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        const activeTab = this.tabs.find(currentTab => currentTab.name === tab.dataset.name);
        this.tabs.forEach(tab => tab.component.hide());
        activeTab.component.show();
    }
}