import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent {
    data:any =[ ]
    constructor(private api:ApiService){
      
        api.fetchPost().subscribe(
          (readValues)=>{
            this.data=readValues
          } 
            )
      
    }

}
