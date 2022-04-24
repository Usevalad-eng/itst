import { Post } from '../model';

export class PostService {

    constructor() { }

    data: Array<Post> = [
        {
            id: 1,
            title: "Моя статья", 
            userId: 1, 
            date: new Date(), 
            previewText: "Моя первая статья",
            fullText: "Моя первая статья. Полный текст",
            picture: "https://avatars.mds.yandex.net/i?id=9e6757cd6c582ba4db9b68bc6a98055e-5906237-images-thumbs&n=13"
        }
    ];

    create(post: Post){
        this.data.push(post);
    }

    get():Array<Post>{
        return this.data;
    }

    remove(post: Post):boolean{
        let index = this.data.indexOf(post);

        if(index !== -1)
            return Boolean(this.data.splice(index, 1));

        return false;
    }

    getById(id: number): Post{
        let index = this.data.findIndex(function(item:Post){
            return item.id == id;
        });

        return this.data[index];
    }
}
