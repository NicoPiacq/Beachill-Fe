import { Component, TemplateRef } from '@angular/core';
import { TournamentsService } from '../../../../services/tournaments.service';
import { AdminService } from '../../../../services/admin.service';
import { TournamentAdminDto } from '../../../../model/dtos/tournament-admin';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../../../../services/auth.service';
import { SuperadminService } from '../../../../services/superadmin.service';

@Component({
  selector: 'app-tournament-admin-container',
  templateUrl: './tournament-admin-container.component.html',
  styleUrl: '../admin-container.component.css'
})
export class TournamentAdminContainerComponent {
  tournaments: TournamentAdminDto[] = [];
  tournamentsUnderway: TournamentAdminDto[] = [];
  filteredTournaments: TournamentAdminDto[] = [];
  
  messageBox: string = "Sei sicuro di voler eliminare questo torneo? Non sarà possibile recuperarlo successivamente!";
  bsModalRef!: BsModalRef;
  deleteId: number = -1;
  hideButton: boolean = false;

  constructor(private tournamentService: TournamentsService, private adminService: AdminService,
              private modalService: BsModalService, private authService: AuthService, private superAdminService: SuperadminService){}

  ngOnInit(){
    this.fetchAllTournaments();
  }

  fetchAllTournaments() {
    this.adminService.getAllTournaments().subscribe({
        next: cs => {
          if(this.getUserData()?.role === 'ADMIN'){
            this.tournaments = cs.filter(tournament => {
              return tournament.userDto?.id === this.getUserData()?.id;
            });
          } else {
            this.tournaments = cs;
          }
          this.tournamentsUnderway = this.tournaments.filter(tournament => {
            return new Date(tournament.startDate) <= new Date() && new Date() <= new Date(tournament.endDate);
          });
        },
        error: (error) => {
            console.error('Errore nel recupero dei tornei:', error);
        }
    });
  }

  deleteTournament(id: number){
    if(this.getUserData()?.role === 'SUPERADMIN') {
      this.superAdminService.deleteTournamentById(id).subscribe({
        error: error => console.error(error)
      });
      this.messageBox = "Torneo eliminato con successo!";
      this.hideButton = true;
      setTimeout(() => {
        this.bsModalRef.hide();
        this.deleteId = -1;
        location.reload();
      }, 3000);
    } else {
      this.adminService.deleteTournament(id).subscribe({
        error: error => console.error(error)
      });
      this.messageBox = "Torneo eliminato con successo!";
      this.hideButton = true;
      setTimeout(() => {
        this.bsModalRef.hide();
        this.deleteId = -1;
        location.reload();
      }, 3000);
    }
  }

  deleteTournamentWarning(id: number, template: TemplateRef<any>) {
    this.deleteId = id;
    this.bsModalRef = this.modalService.show(template);
  }

  closeModal() {
    this.bsModalRef.hide();
    this.deleteId = -1;
    this.messageBox = "Sei sicuro di voler eliminare questo torneo? Non sarà possibile recuperarlo successivamente!";
    this.hideButton = false;
  }

  getUserData() {
    return this.authService.authenticatedUser.value?.user;
  }

}
