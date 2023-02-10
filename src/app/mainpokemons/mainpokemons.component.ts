import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainpokemons',
  templateUrl: './mainpokemons.component.html',
  styleUrls: ['./mainpokemons.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class MainpokemonsComponent implements OnInit {
  pokemons: any[] = [];

  modalDataStats: any[] = [];

  modalDataName: string = '';

  constructor(
    config: NgbModalConfig,
    private ApiService: ApiService,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    for (let i = 1; i <= 151; i++) {
      this.ApiService.getPokemons(i).subscribe((data) => {
        this.pokemons.push(data);
        this.pokemons.sort((a, b) => a.id - b.id);
      });
    }

    console.log(this.pokemons);
  }

  open(content: any, stats: any, name: any) {
    this.modalService.open(content);
    this.modalDataStats = stats;
    this.modalDataName = name;
  }
}
