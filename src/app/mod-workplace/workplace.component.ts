import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { TempUser } from '../com_entities/workplace-entities';
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit {
  activeLink=1;
  currentUser:TempUser;
  constructor(private router: Router) { 
  }
  
  ngOnInit() {
    this.checkSession();
    this.updateActiveLink();
    if(sessionStorage.getItem('workplace_leader-video')!=null){
      this.path=sessionStorage.getItem('workplace_leader-video');
    }
  }

  routeToPath(path:string){
    this.router.navigate(['/'+path]);
  }

  async updateActiveLink(){
    switch(this.router.url) {
      case "/workplace/team": { 
        //statements; 
        this.activeLink=10;
        break; 
      } 
      case "/workplace/team-services": { 
        //statements; 
        this.activeLink=11;
        break; 
      } 
      case "/workplace/function-head": { 
        //statements; 
        this.activeLink=13;
        break; 
      } 
      case "/workplace/opt": { 
        //statements; 
        this.activeLink=16;
        break; 
      } 
      case "/workplace/house-rules": { 
        //statements; 
        this.activeLink=22;
        break; 
      }
      default: { 
        //statements; 
        break; 
      } 
    } 
  }

  async checkSession(){
    var user = sessionStorage.getItem('workplace_user');
    // console.log(user);
    if(user==null){
      await this.routeToPath('welcome');
    }
    else{
      this.currentUser=JSON.parse(user)
      // console.log(this.currentUser);
    }
  }
  path:string='';
}
