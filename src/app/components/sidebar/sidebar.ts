import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  LucideAngularModule, 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardList
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    LucideAngularModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {}

