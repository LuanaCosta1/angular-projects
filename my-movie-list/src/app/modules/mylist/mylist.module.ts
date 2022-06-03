import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MylistRoutingModule } from './mylist-routing.module';
import { MylistComponent } from './mylist/mylist.component';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule} from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip';
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [MylistComponent],
  imports: [
    CommonModule,
    MylistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ConfirmPopupModule,
    DialogModule,
    InputSwitchModule,
    CheckboxModule,
    RatingModule,
    DropdownModule,
    ChipModule,
    AccordionModule,
    TabViewModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class MylistModule { }
