import { Component } from '@angular/core';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
  userId=""
  id=""
  title=""
  body=""
  addpost=()=>
  {
    let data:any=
    {
      "userId": this.userId,
      "id": this.id,
      "title": this.title,
      "body": this.body
    }
    console.log(data)
  }
}
