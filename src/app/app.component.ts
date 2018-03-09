import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(serverElement: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverElement.serverName,
      content: serverElement.serverContent
    });
  }

  onBlueprintAdded(blueprintElement: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintElement.serverName,
      content: blueprintElement.serverContent
    });
  }

}
