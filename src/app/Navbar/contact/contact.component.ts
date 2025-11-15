import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ✅ include required modules
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Data:', contactForm.value);
      alert('Message sent successfully!');
      contactForm.reset();
    }
  }
}
