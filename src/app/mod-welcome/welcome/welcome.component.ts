import { Component, OnInit } from '@angular/core';
import { TempUser,Leader,Team,Resource,TeamResource } from '../../com_entities/workplace-entities';
import { Headers, Http } from '@angular/http';
import { ApiService } from '../../com_services/workplace-services/api-service';
import { AppSettings } from '../../com_entities/app-settings';

import { Router }  from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  teams:Team[]=[];
  leaders:Leader[]=[];
  tempuser:TempUser=new TempUser(0,"","","",0,"",0,0,true);
  resource:Resource[]=[];
  teamResource:TeamResource[]=[];

  constructor(
    private apiService:ApiService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getDependencies();

  }

  async getDependencies(){
    this.leaders=<Leader[]>await this.getAll('Leaders');
    this.teams=<Team[]>await this.getAll('Teams');
    this.resource=<Resource[]>await this.getAll('Resources');
    this.teamResource=<TeamResource[]>await this.getAll('TeamResources');
  }

  //where controller is the name of controller in api
  async getAll(controller:string){
    this.apiService.apiUrl=AppSettings.GETAPIURL(controller);
    var result=await this.apiService.getAll();
    return new Promise<any[]>((resolve)=> resolve(result));
  }

  async postData(controller:string,data:any){
    this.apiService.apiUrl=AppSettings.GETAPIURL(controller);
    var result=await this.apiService.postData(data);
    return new Promise<any>((resolve)=> resolve(result));
  }

  async submit(){
    if(this.tempuser.FirstName=="" ||
    this.tempuser.LastName=="" ||
    this.tempuser.TeamID==""||
    this.tempuser.LeaderID==0){
      alert("Some fields are not supplied.")
    }
    else{
      this.getResources(); 
    }
  }

  routeToPath(path:string){
    this.router.navigate(['/'+path]);
  }

  async getResources(){
    this.tempuser=<TempUser> await this.postData('TemporaryUsers',this.tempuser);
    
    var leader = this.leaders.find(x=>x.LeaderID==this.tempuser.LeaderID);
    var leaderResourceID = leader.LeaderResourceID;
    var managerResourceID = leader.ManagerResourceID;
    var leaderResource = this.resource.find(x=>x.ResourceID==leaderResourceID);
    var managerResource = this.resource.find(x=>x.ResourceID==managerResourceID);
    var tempTeamSrc = this.teamResource.filter(x=>x.TeamID==this.tempuser.TeamID);
    var teamResources:Resource[]=[];

    // console.log(tempTeamSrc);

    for(var i = 0 ; i<tempTeamSrc.length;i++){
      var temp=tempTeamSrc[i];
      var res=this.resource.find(x=>x.ResourceID==temp.ResourceID);
      console.log(res);
      res!=null ? teamResources=teamResources.concat(res) : null;
    }
    // console.log(teamResources);

    sessionStorage.setItem('workplace_user',JSON.stringify(this.tempuser));
    sessionStorage.setItem('workplace_team-resources',JSON.stringify(teamResources));
    sessionStorage.setItem('workplace_leader-video',leaderResource.ResourcePath==null?null:leaderResource.ResourcePath);
    sessionStorage.setItem('workplace_manager-video',managerResource.ResourcePath==null?null:managerResource.ResourcePath);
    this.routeToPath('workplace');
  }


}
