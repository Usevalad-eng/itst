import { Article } from './article.model';

export class ArticleService {

    constructor() { }

    data: Array<Article> = [
        {
         id: 1,
         title: "моя статья",
         author: "вася",
         date: new Date(),
         previewText: "статья", 
         fullText: "полный текст",
         picture: "none",
         favorite: true   
        }
    ];
    users: Array<string> = ["Вася", "Петя", "Коля"];

    create(article: Article){
        this.data.push(article);
    }

    get():Array<Article>{
        return this.data;
    }

    remove(article: Article):boolean{

        let index = this.data.indexOf(article);

        if(index !== -1)
            return Boolean(this.data.splice(index, 1));

        return false;
    }

    update(article: Article):void{
        //
    }

    getUsers(): Array<string>{
        return this.users;
    }
}
