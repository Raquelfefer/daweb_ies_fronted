import { ApplicationConfig, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { 
  LucideAngularModule, 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardList, 
  LogOut, 
  Search, 
  Bell, 
  User, 
  Plus, 
  TrendingUp, 
  Mail, 
  Phone, 
  Clock, 
  Book,
  Edit,
  Trash,
  MoreVertical
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({ 
        LayoutDashboard, 
        Users, 
        GraduationCap, 
        BookOpen, 
        ClipboardList, 
        LogOut, 
        Search, 
        Bell, 
        User, 
        Plus, 
        TrendingUp, 
        Mail, 
        Phone, 
        Clock, 
        Book,
        Edit,
        Trash,
        MoreVertical
      })
    )
  ]
};


