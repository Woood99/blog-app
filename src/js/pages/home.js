import HeaderComponent from "../components/header.component";
import navigationComponent from "../components/navigation.component";
import FavoriteComponent from "../components/favorite.component";
import CreateComponent from "../components/create.component";
import PostsComponent from "../components/posts.component";

document.addEventListener('DOMContentLoaded', () => {
    new HeaderComponent('header');
    const navigation = new navigationComponent('navigation');
    const posts = new PostsComponent('posts');
    const create = new CreateComponent('create');
    const favorite = new FavoriteComponent('favorite');

    navigation.registerTabs([{
            name: 'create',
            component: create
        },
        {
            name: 'posts',
            component: posts
        },
        {
            name: 'favorite',
            component: favorite
        }
    ])
});