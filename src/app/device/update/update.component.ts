import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../device';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
      
  id!: number;
  device!: Device;
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public deviceService: DeviceService,
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
    this.deviceService.find(this.id).subscribe((data: Device)=>{
      this.device = data;
    }); 
      
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.deviceService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('device updated successfully!');
         this.router.navigateByUrl('device/index');
    })
  }
   
}