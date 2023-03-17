import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {City} from '../../../model/city';
import {CityService} from '../../../service/city/city.service';
import {CarTypeService} from "../../../service/car-type/car-type.service";
import {CarCompanyService} from "../../../service/car-company/car-company.service";
import {CarType} from "../../../model/car-type";
import {CarCompany} from "../../../model/car-company";

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
              private carCompanyService: CarCompanyService) {
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      numberPlate: new FormControl(''),
      type: new FormControl('', Validators.required),
      name: new FormControl(''),
      startCity: new FormControl('', Validators.required),
      endCity: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(0)(9[0137]\\d{7})$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$')]),
      startHour: new FormControl('', Validators.required),
      endHour: new FormControl('', Validators.required)
    });
    this.getAllCity();
    this.getAllCarCompany();
    this.getAllCarType();
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
  }
}
