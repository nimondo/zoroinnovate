import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  contactForm: FormGroup;
  errorMessage: string;
  contact: Contact;
  id:string;
  idNum: number;
  constructor(private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private snackBar: SnackbarService,
    private route: ActivatedRoute) {

    }

    ngOnInit() {
      this.initForm();
      this.id = this.route.snapshot.params['id'];
      this.idNum = parseInt(this.id);
      if(this.id){
        this.contactService.getContact(parseInt(this.id)).subscribe(
          (data: Contact) =>{
          this.contact = data;
          this.contactForm.get('firstname')?.setValue(this.contact.firstname);
          this.contactForm.get('lastname')?.setValue(this.contact.lastname);
          this.contactForm.get('email')?.setValue(this.contact.email);
          this.contactForm.get('poste')?.setValue(this.contact.poste);
          this.contactForm.get('address')?.setValue(this.contact.address);
          this.contactForm.get('entrepriseName')?.setValue(this.contact.entrepriseName);
          this.contactForm.get('phoneNumber')?.setValue(this.contact.phoneNumber);
      },
      err => {
        this.snackBar.openSnackBar('Une erreur est survenue', 'ok');
      }
      )
      }

     
    }
  
    initForm() {
      this.contactForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        firstname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,}/)]],
        lastname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,}/)]],
        poste: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{3,}/)]],
        address: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{3,}/)]],
        entrepriseName: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{3,}/)]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^((\+)33|0|0033)[1-9](\d{2}){4}$/g)]]
      });
    }
  
    onSubmit() {
      this.contact.firstname= this.contactForm.get('firstname') ? this.contactForm.get('firstname')?.value :this.contact.firstname;
      this.contact.lastname= this.contactForm.get('lastname') ? this.contactForm.get('lastname')?.value :this.contact.lastname;
      this.contact.email= this.contactForm.get('email') ? this.contactForm.get('email')?.value :this.contact.email;
      this.contact.poste= this.contactForm.get('poste') ? this.contactForm.get('poste')?.value :this.contact.poste;
      this.contact.address= this.contactForm.get('address') ? this.contactForm.get('address')?.value :this.contact.address;
      this.contact.entrepriseName= this.contactForm.get('entrepriseName') ? this.contactForm.get('entrepriseName')?.value :this.contact.firstname;
      this.contact.phoneNumber= this.contactForm.get('phoneNumber') ? this.contactForm.get('phoneNumber')?.value : this.contact.phoneNumber;
      this.contact.author = localStorage.getItem('userId')!;
      const email = this.contactForm.get('email')?.value;
      const password = this.contactForm.get('password')?.value;
      if(this.id){
        this.contactService.putContact(this.contact, parseInt(this.id)).subscribe(
          res => {
              this.snackBar.openSnackBar('Modification effectuee', email);
              this.router.navigateByUrl('contact');
          },
          err => {
            this.snackBar.openSnackBar('Connexion echouee', email);
          }
        )
      }else{
        this.contactService.createContact(this.contact).subscribe(
          res => {
              this.snackBar.openSnackBar('Ajout effectue', email);
              this.router.navigateByUrl('contact');
          },
          err => {
            this.snackBar.openSnackBar('Connexion echouee', email);
          }
        )
      }
      
   }

   deleteContact(id:number|undefined){

    if (confirm("Confirmez la suppression") == true) {
      this.contactService.deleteContact(id!).subscribe(
        (data) =>{
          this.snackBar.openSnackBar('Suppression ok', 'ok');
          this.router.navigate(['/contact']);
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
