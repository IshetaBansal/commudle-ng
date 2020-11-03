import { Component, OnInit } from '@angular/core';
import { SpeakerResourcesService } from 'projects/commudle-admin/src/app/services/speaker-resources.service';
import { ActivatedRoute } from '@angular/router';
import { ICommunity } from 'projects/shared-models/community.model';
import { ISpeakerResource } from 'projects/shared-models/speaker_resource.model';
import * as moment from 'moment';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event-resources',
  templateUrl: './event-resources.component.html',
  styleUrls: ['./event-resources.component.scss']
})
export class EventResourcesComponent implements OnInit {
  moment = moment;
  community: ICommunity;
  speakerResources: ISpeakerResource[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private speakerResourcesService: SpeakerResourcesService,
    private meta: Meta,
    private title: Title
  ) { }

  setMeta() {
    this.title.setTitle(`Past Event Sessions | ${this.community.name}`);
    this.meta.updateTag({ name: 'og:title', content: `Past Event Sessions | ${this.community.name}` });
    this.meta.updateTag({ name: 'twitter:title', content: `Past Expert Sessions | ${this.community.name}` });
  }

  ngOnInit() {
    this.activatedRoute.parent.data.subscribe(data => {
      this.community = data.community;
      this.setMeta();
      if (this.community) {
        this.getResources();
      }
    });
  }


  getResources() {
    this.speakerResourcesService.pCommunitySpeakerResources(this.community.id).subscribe(
      data => {
        this.speakerResources = data.speaker_resources;
      }
    );
  }

  // sanitizedText(text) {
  //   return this.sanitizer.bypassSecurityTrustHtml(text);
  // }

}
