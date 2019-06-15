import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent { 
  
  name = "The Redemption"; //component class property

  wasWatched(){ //component class method
    return true;
  }

}
