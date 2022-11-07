import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../device';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: number;
  device!: Device;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: DeviceService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['deviceId'];
        
    this.postService.find(this.id).subscribe((data: Device)=>{
      this.device = data;
    });
  }
    
}