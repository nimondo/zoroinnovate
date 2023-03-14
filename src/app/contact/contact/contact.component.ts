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
          let userId = localStorage.getItem('userId');
          data.filter((e)=>{
            return e.author == userId
          })
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
        let userId = localStorage.getItem('userId');
        data.filter((e)=>{
          return e.author == userId
        })
  },
  err => {
    this.snackBar.openSnackBar('Une erreur est survenue', 'ok');
  }
  )
  }

  updateContact(id:number|undefined){

    this.router.navigate(['/contact', 'add', id]);
  }

  deleteContact(id:number|undefined){

    if (confirm("Confirmez la suppression") == true) {
      this.contactService.deleteContact(id!).subscribe(
        (data) =>{
          this.snackBar.openSnackBar('Suppression ok', 'ok');
          this.reload();
    },
    err => {
      this.snackBar.openSnackBar('Une erreur est survenue', 'ok');
    }
    )
    } else {
      this.snackBar.openSnackBar('Suppression annulee', 'ok');
    }
  }

}
