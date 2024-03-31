import HeaderComponent from "./components/header.component";
import navigationComponent from "./components/navigation.component";
import FavoriteComponent from "./components/favorite.component";
import CreateComponent from "./components/create.component";
import PostsComponent from "./components/posts.component";
import LoaderComponent from "./components/loader.component";
import DeleteComponent from "./components/delete.component";

document.addEventListener('DOMContentLoaded', () => {
    new HeaderComponent('header');
    const navigation = new navigationComponent('navigation');
    const loader = new LoaderComponent('loader');

    const posts = new PostsComponent('posts', {
        loader
    });
    const deletePost = new DeleteComponent('posts', {
        loader
    });
    const create = new CreateComponent('create');
    const favorite = new FavoriteComponent('favorite', {
        loader
    });

    navigation.registerTabs([{
            name: 'create',
            component: create
        },
        {
            name: 'posts',
            component: posts
        },
        {
            name: 'posts',
            component: deletePost
        },
        {
            name: 'favorite',
            component: favorite
        }
    ])
});