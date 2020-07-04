import { Component, OnInit } from '@angular/core';
import { SendUrlService } from '../../shared/services/send.url.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos = [
    {title: 'Кастаньєти вдома', url: 'https://www.youtube.com/watch?v=c5U9TnqyE6M'},
    {title: 'Прелюдія і фуга мі-мінор Баха', url: 'https://www.youtube.com/watch?v=100tx_wngz0'},
    {title: 'Кастаньєти вдома', url: 'https://www.youtube.com/watch?v=c5U9TnqyE6M'},
    {title: 'Софія Командирчик', url: 'https://www.youtube.com/watch?v=KyAXGYjmGoQ'},
    {title: 'Перша частина сонати Гайдна пдлд длдлп длпдлп длпдлд', url: 'https://www.youtube.com/watch?v=wbjmjutcnkw'}
  ];
  videoUrl: string;
  opened = false;
  constructor(private sendUrlService: SendUrlService) { }

  ngOnInit() {
  }
  getShowVideo() {
    this.sendUrlService.openedVideo.subscribe(data => {
      this.opened = data;
    });
  }
  showVideo(video) {
    this.videoUrl = video.url;
    this.opened = true;
    this.sendUrlService.sendVideoUrl(video.url);
    this.sendUrlService.showVideo();
  }
  hideVideo(data) {
    this.opened = data;
  }

}
