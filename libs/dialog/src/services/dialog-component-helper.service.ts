import {
  ChangeDetectorRef,
  inject,
  Injectable,
  Injector,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { DialogRemoteControl } from '../models';
import { provideRemoteControl } from '../providers/remote-control-provider';

type RemoteControlType = DialogRemoteControl;

@Injectable()
export class DialogComponentHelperService {
  private cd: ChangeDetectorRef = inject(ChangeDetectorRef);

  loadComponent(
    content: ViewContainerRef,
    remoteControl: RemoteControlType,
    componentType?: Type<any>
  ): void {
    if (!content || !componentType) return; // Guard condition

    const injector = Injector.create({
      providers: provideRemoteControl(remoteControl),
    });

    content.clear();
    content.createComponent(componentType, { injector });
    this.cd.detectChanges();
  }
}
