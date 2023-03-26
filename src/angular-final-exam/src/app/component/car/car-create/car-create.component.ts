import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {City} from '../../../model/city';
import {CityService} from '../../../service/city/city.service';
import {CarTypeService} from '../../../service/car-type/car-type.service';
import {CarCompanyService} from '../../../service/car-company/car-company.service';
import {CarType} from '../../../model/car-type';
import {CarCompany} from '../../../model/car-company';
import {CarService} from '../../../service/car/car.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  formCreate: FormGroup;
  cities: City[];
  carTypes: CarType[];
  carCompanies: CarCompany[];

  constructor(private cityService: CityService,
              private carTypeService: CarTypeService,
              private carCompanyService: CarCompanyService,
              private carService: CarService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAllCity();
    this.getAllCarCompany();
    this.getAllCarType();
    this.formCreate = new FormGroup({
      numberPlate: new FormControl('', Validators.required),
      carType: new FormControl('', Validators.required),
      carCompany: new FormControl('', Validators.required),
      startCity: new FormControl('', Validators.required),
      endCity: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(0)(9[0137]\\d{7})$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$')]),
      startHour: new FormControl('', [Validators.required, this.validateTimeFormat, this.validateTimeRange]),
      endHour: new FormControl('', [Validators.required, this.validateTimeFormat, this.validateTimeRange])
    });
  }

  getAllCarType() {
    this.carTypeService.getAll().subscribe(carTypes => {
      this.carTypes = carTypes;
    });
  }

  getAllCarCompany() {
    this.carCompanyService.getAll().subscribe(carCompanies => {
      this.carCompanies = carCompanies;
    });
  }

  getAllCity() {
    this.cityService.getAll().subscribe(cities => {
      this.cities = cities;
    });
  }

  onSubmit() {
    const car = this.formCreate.value;
    console.log(car);
    this.carService.save(car).subscribe(next => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thêm mới thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.route.navigateByUrl('/cars/list');
      console.log(next);
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Thêm mới thất bại',
        showConfirmButton: false,
        timer: 1500
      });
      console.log(error);
    });
  }

  validateTimeFormat(control: FormControl) {
    const value = control.value;
    if (value && !/^\d{2}:\d{2}$/.test(value)) {
      return { invalidTimeFormat: true };
    }
    return null;
  }

  validateTimeRange(control: FormControl) {
    const value = control.value;
    const time = new Date(`2000-01-01T${value}:00`);
    if (time.getHours() < 5 || time.getHours() >= 23) {
      return { invalidTimeRange: true };
    }
    return null;
  }
}
