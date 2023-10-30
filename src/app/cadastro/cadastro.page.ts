import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  email: string = '';
  name: string = '';
  password: string = '';
  check: string = '';

  constructor(
    public navCntrl: NavController,
    private auth: Auth,
    private firestore: Firestore // Adicione isso
  ) {}

  async signup() {
    if (this.password == this.check) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          this.auth,
          this.email,
          this.password
        );
        const user = userCredential.user;

        // Salvar dados do usuário no Firestore
        await this.firestore.collection('users').doc(user.uid).set({
          email: this.email,
          name: this.name,
          // Você pode adicionar mais campos aqui conforme necessário
        });

        console.log(user);

        // Redireciona para a página inicial após cadastro bem-sucedido
        this.gotoHome();
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
        // Aqui você pode lidar com erros de cadastro, como mostrar uma mensagem para o usuário.
      }
    } else {
      return alert('As senhas diferem!');
    }
  }

  ngOnInit() {}
  gotoHome() {
    this.navCntrl.navigateForward('/');
  }
}
