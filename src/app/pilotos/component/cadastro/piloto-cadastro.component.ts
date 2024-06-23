import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CarroInterface, CarroService } from "src/app/carros";
import { EquipeInterface, EquipeService } from "src/app/equipe";
import { StatusEnum } from "../../types/statusEnum";
import { PilotoService } from "../../service/pilotos.service";
import { AlertService } from "src/app/core/services";


@Component({
    templateUrl: './piloto-cadastro.component.html'
})
export class PilotoCadastroComponent implements OnInit, OnDestroy {

    
    
    private equipesValidator: ValidatorFn = (control: AbstractControl<any, any>): ValidationErrors | null => {
        if (control.value?.length < 1) {
            return { autoresInvalido: true }
        }
        return null;
    }

    private carrosValidator: ValidatorFn = (control: AbstractControl<any, any>): ValidationErrors | null => {
        if (control.value?.length < 1) {
            return { autoresInvalido: true }
        }
        return null;
    }

    id: string = '';
    equipes: EquipeInterface[] = [];
    
    carros:CarroInterface[] = [];
    
    pilotoForm = new FormGroup({
        nome: new FormControl(),
        dataNasc: new FormControl(new Date(),[
            Validators.required
        ]),
        numero: new FormControl( Number(),
            Validators.required
          ),
        status: new FormControl( StatusEnum.INATIVO


        ),
        equipe: new FormControl<EquipeInterface | EquipeInterface[]>([], this.equipesValidator),
        carro: new FormControl<CarroInterface | CarroInterface[]>([], this.carrosValidator)
    
    });

    private subscriptions = new Subscription();

    constructor(
        private activatedRoute: ActivatedRoute,

        private router: Router,
        private pilotoService: PilotoService,
        private equipeService: EquipeService,
        private alertService: AlertService,
        private carroService: CarroService,
    ) { }

    ngOnInit(): void {
        this.carregaEquipes()
        this.carregaCarros();
        
        this.id = this.activatedRoute.snapshot.params['id'];
        if (this.id) {
            this.subscriptions.add(
                this.pilotoService.getPiloto(this.id).subscribe((piloto) => {
                    this.pilotoForm.patchValue({ ...piloto })
                }, (error) => {
                    this.alertService.error('Não foi possível carregar os dados do livro!')
                    console.error(error)
                })
            )
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    carregaEquipes() {
        const subscription = this.equipeService.getEquipes().subscribe(
            (equipes) => {
                console.log(equipes);
                this.equipes = equipes;
            },
            (error) => {
                console.error(error);
                this.alertService.error('Não foi possível carregar as equipes. Tente novamente mais tarde')

            }
        )
        this.subscriptions.add(subscription);
    }

    carregaCarros() {
        const subscription = this.carroService.getCarros().subscribe(
            (carros) => {
                console.log(carros);
                this.carros = carros;
            },
            (error) => {
                console.error(error);
                this.alertService.error(error)

            }
        )
        this.subscriptions.add(subscription);
    }

    compareWith(o1: EquipeInterface, o2: EquipeInterface) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

    onSubmit() {
        const piloto = this.pilotoForm.value;

        let observable;
        if (this.id) {
            observable = this.pilotoService.update(this.id, piloto);
        } else {
            observable = this.pilotoService.save(piloto);
        }

        this.subscriptions.add(
            observable
                .subscribe({
                    next: () => {
                        this.router.navigate(['/pilotos'])
                    },
                    error: (error) => {
                        console.error(error);
                        this.alertService.error(
                            error
                        );
                    }
                })
        );

    }
}