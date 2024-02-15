import { Component, Input } from '@angular/core';
import { TeamDto } from '../../../../../../../model/dtos/team';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamsService } from '../../../../../../../services/teams.service';
import { SuperadminService } from '../../../../../../../services/superadmin.service';

@Component({
  selector: 'app-edit-team-info-form',
  templateUrl: './edit-team-info-form.component.html',
  styleUrl: './edit-team-info-form.component.css'
})
export class EditTeamInfoFormComponent {
  @Input("teamProp") team!: TeamDto;
  editTeamInfoForm!: FormGroup;

  errorMessage: string = "";
  successMessage: string = "";

  constructor(private teamsService: TeamsService, private formBuilder: FormBuilder, private superAdminService: SuperadminService) { }
  
  ngOnInit(): void {
    this.editTeamInfoForm = this.formBuilder.group({
      id: [this.team.id],
      teamName: [this.team.teamName],
      name: [this.team.teamLeaderName],
      surname: [this.team.teamLeaderSurname],
      idTeamLeader: [this.team.idTeamLeader]
    });
  }

  editUserInfo() {
    let editTeamInfo = {...this.editTeamInfoForm.value};
    console.log(editTeamInfo);
    this.superAdminService.editTeamInfo(editTeamInfo).subscribe({
      next: () => {
        this.showSuccessMessage("Dettagli squadra aggiornati con successo!\n");
        setTimeout(() => { window.location.reload(); }, 2000);
      },
      error: (err) => {
        this.showErrorMessage("Errore durante l'aggiornamento dei dettagli della squadra!\nERRORE: "+err.message);
      }
    });
  }

  showErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => { this.errorMessage = ''; }, 5000)
  }

  showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => { this.successMessage = ''; }, 5000);
  }
}
