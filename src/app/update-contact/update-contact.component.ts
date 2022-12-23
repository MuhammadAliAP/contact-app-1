import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { MyGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contactId: any
  contact: MyContact = {} as MyContact
  groups: MyGroup[] =[] as MyGroup[]

  constructor(private activateRoute: ActivatedRoute, private api: ApiService,private router:Router) { }

  ngOnInit(): void {
    //get contact id from url parameter using ActivatedRoute class
    this.activateRoute.params.subscribe((data: any) => {
      // console.log(data.contactId);
      this.contactId = data['contactId']
      //call api for getting perticular contact detail
      this.api.viewContact(this.contactId).subscribe((data: any) => {
        this.contact = data
      })
    })
// call api for getting all groups from service class
    this.api.getAllGroups().subscribe((data: any) => {
      this.groups = data
    })
  }

  //updateContact

updateContact(){
    //api call for updating the existing contact , arg: update contact , contact id
this.api.updateContact(this.contactId,this.contact)
.subscribe((data:any)=>{
  this.router.navigateByUrl('')
})
}
}
