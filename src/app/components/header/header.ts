import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search, Bell, User, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {}

