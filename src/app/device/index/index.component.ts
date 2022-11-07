import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../device';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  devices: Device[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public deviceService: DeviceService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.deviceService.getAll().subscribe((data: Device[])=>{
      this.devices = data;
      console.log(this.devices);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteDevice(id:number){
    this.deviceService.delete(id).subscribe(res => {
         this.devices = this.devices.filter(item => item.id !== id);
         console.log('device deleted successfully!');
    })
  }
    
}