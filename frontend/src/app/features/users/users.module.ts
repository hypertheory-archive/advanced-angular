import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OnboardComponent } from './components/onboard/onboard.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    // /users
    path: 'users',
    component: UsersComponent,
    children: [
      {
        // users/onboard
        path: 'onboard',
        component: OnboardComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [UsersComponent, OnboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class UsersModule {}
