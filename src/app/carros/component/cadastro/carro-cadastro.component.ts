import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlertService } from "src/app/core/services";
import { EquipeInterface, EquipeService } from "src/app/equipe";
import { CarroService } from "../../service/carros.service";
import { PilotoInterface, PilotoService } from "src/app/pilotos";

@Component({
    templateUrl: './carro-cadastro.component.html'
})
export class CarroCadastroComponent implements OnInit, OnDestroy {

    
    private anoAtualValidator: ValidatorFn = (control: AbstractControl<any, any>): ValidationErrors | null => {
        const anoAtual = new Date().getFullYear();
        if (control.value && control.value > anoAtual) {
            return { anoInvalido: true }
        }
        return null;
    }
    private equipesValidator: ValidatorFn = (control: AbstractControl<any, any>): ValidationErrors | null => {
        if (control.value?.length < 1) {
            return { autoresInvalido: true }
        }
        return null;
    }

    id: string = '';
    equipes: EquipeInterface[] = [];
    pilotos: PilotoInterface[] = [];
    
    carroForm = new FormGroup({
        placa: new FormControl(),
        fabricacao: new FormControl(new Date(),[
            Validators.required
        ]),
        equipe: new FormControl<EquipeInterface | EquipeInterface[]>([], this.equipesValidator),
        piloto: new FormControl<PilotoInterface | PilotoInterface[]>([], this.equipesValidator)
    
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
        this.carregaPilotos();
        
        this.id = this.activatedRoute.snapshot.params['id'];
        if (this.id) {
            this.subscriptions.add(
                this.carroService.getCarro(this.id).subscribe((carro) => {
                    this.carroForm.patchValue({ ...carro })
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

    carregaPilotos() {
        const subscription = this.pilotoService.getPilotos().subscribe(
            (pilotos) => {
                console.log(pilotos);
                this.pilotos = pilotos;
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
        const carro = this.carroForm.value;

        let observable;
        if (this.id) {
            observable = this.carroService.update(this.id, carro);
        } else {
            observable = this.carroService.save(carro);
        }

        this.subscriptions.add(
            observable
                .subscribe({
                    next: () => {
                        this.router.navigate(['/carros'])
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