import Component from "../modules/Component";
import Form from "../modules/form";
import Validators from "../modules/validators";
import { apiService } from "../services/api.service";
export default class CreateComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.el.addEventListener('submit', submitHandler.bind(this));


        this.form = new Form(this.el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(10)]
        });
    }
}

async function submitHandler(e) {
    e.preventDefault();

    if (this.form.isValid()) {
        const formData = {
            ...this.form.value(),
            date: new Date().toLocaleDateString(),
            type: this.el.type.value
        }

        await apiService.createPost(formData);

        this.form.clear();

        console.log('Запись создана в базе данных');
    }
}