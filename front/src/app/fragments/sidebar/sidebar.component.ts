import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activeSesion: boolean | undefined;

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.activeSesion= true;
    } else{
      this.activeSesion= false;
    }
  }

}
