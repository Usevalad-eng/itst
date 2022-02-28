import { Component, Input} from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-twit',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TwitComponent{
    @Input()
    lists: List[] = [];
}
