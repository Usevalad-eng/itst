import { Post } from '../model';





import { Article } from './article.model';

export class PostService {

    constructor() { }

    data: Array<Post> = [
        {
            id: 1,
            title: "Моя статья", 
            author: "Вася", 
            date: new Date(), 
            previewText: "Моя первая статья",
            fullText: "Моя первая статья. Полный текст",
            picture: "none",
            favorite: true
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

    update(article: Post):void{
        //
    }

    getUsers(): Array<string>{
        return this.users;
    }

    getById(id: number): Post{
        let index = this.data.findIndex(function(item:Post){
            return item.id == id;
        });

        return this.data[index];
    }
}