import {Component, OnInit} from '@angular/core';
import {CarService} from '../../../service/car/car.service';
import {Car} from '../../../model/car';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  data: any;
  page = 0;
  totalPages = 0;
  size = 5;
  pageArray: number[] = [];

  constructor(private carService: CarService) {
  }

  async ngOnInit() {
    await this.getAll(this.page, this.size);
    this.pageArray = Array(this.totalPages).fill(0).map((x, i) => i);
  }

  async getAll(page: number, size: number) {
    this.carService.getAll(page, size).subscribe(data => {
      this.data = data;
      this.cars = this.data.content;
      this.totalPages = this.data.totalPages;
    });
  }

  getInfo(id: number, numberPlate: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Bạn có chắc chắn muốn xóa ' + numberPlate + '?',
      text: 'Bạn không thể hoàn tác điều này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Thoát!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.carService.deleteById(id).subscribe(next => {
          swalWithBootstrapButtons.fire(
            'Xóa thành công!',
            'Bạn đã xóa 1 xe.',
            'success'
          );
          this.getAll(this.page, this.size);
        }, error => {
          swalWithBootstrapButtons.fire({
              title: 'Xóa không thành công!',
              text: 'Đã có lỗi xảy ra, không thể xóa được!!',
              icon: 'error'
            }
          );
          console.log(error);
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    });
  }

  next() {
    if (this.page < this.totalPages) {
      this.page++;
    }
    this.getAll(this.page, this.size);
  }

  prev() {
    if (this.page > 0) {
      this.page--;
    }
    this.getAll(this.page, this.size);
  }

  goToPage(pageNum: number) {
    this.page = pageNum;
    this.getAll(this.page, this.size);
  }
}
