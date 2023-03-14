import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router, ActivatedRoute} from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: Contact[];
  filter: string;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private snackBar: SnackbarService,
    private route: ActivatedRoute) {

    }

    ngOnInit() {
      this.contactService.getContactList().subscribe(
        (data: Contact[]) =>{
        this.contacts = data;
    },
    err => {
      this.snackBar.openSnackBar('Une erreur est survenue', 'ok');
    }
    )
  }

  search(search: string): void {
    let searchStr=  search.toLocaleLowerCase();
    
    let result = this.contacts.filter((e)=>{
     return e.address?.toLocaleLowerCase() == searchStr || e.email?.toLocaleLowerCase() == searchStr  || e.firstname?.toLocaleLowerCase() == searchStr
      || e.lastname?.toLocaleLowerCase()== searchStr || e.entrepriseName?.toLocaleLowerCase() == searchStr
    })
    this.contacts = result;
  }

  reload(){
    this.contactService.getContactList().subscribe(
      (data: Contact[]) =>{
      this.contacts = data;
  },
  err => {
    this.snackBar.openSnackBar('Une erreur est survenue', 'ok');
  }
  )
  }

}
