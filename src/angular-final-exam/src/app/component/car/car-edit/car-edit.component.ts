import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from '../../../service/city/city.service';
import {City} from '../../../model/city';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../../service/car/car.service';
import {Car} from '../../../model/car';
import Swal from 'sweetalert2';
import {CarTypeService} from '../../../service/car-type/car-type.service';
import {CarCompanyService} from '../../../service/car-company/car-company.service';
import {CarType} from '../../../model/car-type';
import {CarCompany} from '../../../model/car-company';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  formEdit: FormGroup;
  cities: City[];
  idEdit: number;
  carEdit?: Car;
  id = 0;
  carTypes: CarType[];
  carCompanies: CarCompany[];

  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private route: Router,
              private carTypeService: CarTypeService,
              private carCompanyService: CarCompanyService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idEdit = +paramMap.get('id');
      this.carService.findById(this.idEdit).subscribe(car => {
        this.carEdit = car;
        this.getAllCity();
        this.getAllCarCompany();
        this.getAllCarType();
        this.formEdit = new FormGroup({
          id: new FormControl(this.carEdit.id),
          numberPlate: new FormControl(this.carEdit.numberPlate, Validators.required),
          carType: new FormControl(this.carTypes.find(i => i.id === car.carType.id), Validators.required),
          carCompany: new FormControl(this.carCompanies.find(i => i.id === car.carCompany.id), Validators.required),
          startCity: new FormControl(this.cities.find(i => i.id === car.startCity.id), Validators.required),
          endCity: new FormControl(this.cities.find(i => i.id === car.startCity.id), Validators.required),
          phoneNumber: new FormControl(this.carEdit.phoneNumber, [Validators.required, Validators.pattern('^(0)(9[0137]\\d{7})$')]),
          email: new FormControl(this.carEdit.email, [Validators.required, Validators.pattern('^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$')]),
          startHour: new FormControl(this.carEdit.startHour, Validators.required),
          endHour: new FormControl(this.carEdit.endHour, Validators.required)
        });
      });
    });
  }

  getAllCity() {
    this.cityService.getAll().subscribe(cities => {
      this.cities = cities;
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

  onSubmit() {
    const car = this.formEdit.value;
    this.carService.editById(car.id, car).subscribe(next => {
      this.route.navigateByUrl('/cars/list');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Chỉnh sửa thành công',
        showConfirmButton: false,
        timer: 1500
      });
      console.log(next);
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Chỉnh sửa thất bại',
        showConfirmButton: false,
        timer: 1500
      });
      console.log('Thất bại');
    });
  }
}
