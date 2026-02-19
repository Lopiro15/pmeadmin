<template>
  <div class="row row-sm">
    <div class="col-xl-12 col-lg-12  main-content-body-mail1" v-if="isInbox">
      <div class="card custom-card mail-container task-container overflow-hidden">
        <div class="inbox-body p-4">
          <div class="input-group main-mail-search">
            <input class="form-control" placeholder="Rechercher Message..." v-model="this.store.q" type="text">
            <span class="input-group-btn">
													<button class="btn btn-primary" @click.prevent="search(this.store.q)" type="button">
														<span class="input-group-btn">
															<i class="fa fa-search"></i>
														</span>
													</button>
												</span>
          </div>
          <div class="mail-option mt-4">
            <div class="btn-group hidden-phone">
              <a data-bs-toggle="dropdown" href="javascript:;" class="btn mini blue" aria-expanded="false">
                Plus
                <i class="fe fe-chevron-down"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a href="javascript:;" @click.prevent="this.delete"><i class="fe fe-trash me-2"></i> Supprimer</a></li>
              </ul>
            </div>
            <ul class="unstyled inbox-pagination" v-show="isInbox && isData">
              <li><span>{{ this.store.paginate }} de {{ this.store.totalComments }}</span></li>
            </ul>
          </div>
          <div class="table-responsive">
            <table class="table table-inbox text-md-nowrap table-hover text-nowrap">
              <tbody v-show="isInbox && isData">
              <tr class="" v-for="(comment, index) in this.store.comments">
                <td class="inbox-small-cells">
                  <label class="custom-control custom-checkbox mb-0">
                    <input type="checkbox" class="custom-control-input" :id="'chk' + index"
                           :value="comment.id" v-model="selectedComment">
                    <span class="custom-control-label"></span>
                  </label>
                </td>
                <td class="view-message dont-show tx-semibold clickable-row" @click="goDetail(comment)" data-href="">
                  {{ comment.fullName }}
                </td>
                <td class="view-message tx-light clickable-row" @click="goDetail(comment)" data-href="">
                  {{ this.truncater(comment.content, 92) }}
                </td>
                <td class="view-message text-end tx-semibold clickable-row" @click="goDetail(comment)" data-href="">
                  {{ this.ago(comment.createdAt) }}
                </td>
              </tr>
              </tbody>
              <tbody v-show="!isData">
              <tr class="">
                <td class="text-muted text-center">Aucun Message</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- mail-content -->
      </div>
      <div class="text-center ms-3 mb-4" v-show="isInbox && isData">
        <div class="row row-sm">
          <nav>
            <ul class="pagination justify-content-end">
              <li class="page-item"><a class="page-link" href="javascript:;"
                                       @click.prevent="paginate(this.store.prev, -1)">Prev</a></li>
              <li class="page-item"><a class="page-link" href="javascript:;"
                                       @click.prevent="paginate(this.store.next, 1)">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>


  <div class="row row-sm" v-if="!isInbox">
    <div class="col-lg-12 col-xl-12 col-md-12">
      <div class="card custom-card">
        <div class="card-body h-100">
          <div class="email-media">
            <div class="mb-4 d-lg-flex">
              <h3>Detail Message</h3>
              <div class="ms-auto d-none d-md-flex fs-18">
                <a href="javascript:;" @click.prevent="goInbox" class="contact-icon text-primary"
                   data-bs-toggle="tooltip" title="" data-bs-original-title="Tag" aria-label="Inbox"><i
                    class="fe fe-inbox"></i></a>
              </div>
            </div>
            <div class="media mt-0">
              <div class="main-img-user avatar-md me-3 online">
                <img alt="avatar" class="rounded-circle"
                     :src="'https://ui-avatars.com/api/?background=random&font=000&name=' + this.store.activeComment.fullName">
              </div>
              <div class="media-body tx-inverse">
                <div class="float-end d-none d-md-flex fs-15">
                  <div class="me-3">{{ formatDate(this.store.activeComment.createdAt) }}</div>
                </div>
                <div class="media-title font-weight-normal"><span
                    class="tx-18 tx-medium">{{ this.store.activeComment.fullName }}</span>
                  <p class="mb-0 text-muted">{{ this.store.activeComment.email }}</p>
                  <small class="me-2 d-md-none">{{ formatDate(this.store.activeComment.createdAt) }}</small>
                </div>
              </div>
            </div>
          </div>
          <div class="eamil-body">
            <p>{{ this.store.activeComment.content }}</p>
            <hr class="message-inner-separator">
          </div>
        </div>
        <div class="card-footer">
          <a class="btn btn-sm ripple btn-primary mt-1 mb-1" @click.prevent="goReply(this.store.activeComment)"
             href="javascript:;"><i class="fa fa-reply"></i> Repondre</a>
          <!--          <a class="btn btn-sm ripple btn-secondary mt-1 mb-1" href="javascript:;"><i class="fa fa-share"></i> Forward</a>-->
        </div>
      </div>
    </div>
  </div>


  <div class="row row-sm" v-if="isReply">
    <div class="col-lg-12 col-xl-12 col-md-12">
      <div class="card custom-card">
        <div class="card-header">
          <h3 class="card-title tx-18">
            <label class="main-content-label tx-15">Répondre</label>
          </h3>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <div class="row align-items-center">
                <label class="col-sm-3 col-xl-2 form-label tx-semibold">A</label>
                <div class="col-sm-9 col-xl-10">
                  <input type="text" class="form-control" readonly="readonly" v-model="this.store.activeComment.email">
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row align-items-center">
                <label class="col-sm-3 col-xl-2 form-label tx-semibold">Sujet</label>
                <div class="col-sm-9 col-xl-10">
                  <input type="text" class="form-control" v-model="this.store.subject">
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <label class="col-sm-3 col-xl-2 form-label tx-semibold">Message</label>
                <div class="col-sm-9 col-xl-10">
                  <textarea rows="10" class="form-control" v-model="this.store.msg"></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer d-sm-flex">
          <div class="btn-list ms-auto">
            <button class="btn btn-danger" @click.prevent="cancelReply">Annuler</button>
            <button class="btn btn-primary" @click.prevent="reply">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {useMessageStore} from "../stores/messageStore";
import {formatDistanceToNow} from 'date-fns';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import Swal from 'sweetalert2';

export default {
  name: "Message",
  data() {
    return {
      store: useMessageStore(),
      selectedComment: [],
      isInbox: true,
      isData: false,
      isReply: false
    }
  },
  mounted() {
    fetch("/api/messages?order[createdAt]=desc", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Autres en-têtes si nécessaire
      },
      credentials: 'omit', // Utilisez 'omit' pour ne pas envoyer les cookies
    })
        .then((response) => response.json())
        .then((json) => {
          this.store.page = 1;
          this.store.comments = json["member"];
          this.store.totalComments = +json["totalItems"];
          this.store.next = json["view"]["next"] ?? json["view"]["last"];
          this.store.prev = json["view"]["previous"] ?? json["view"]["first"];
          this.isData = (this.store.totalComments > 0)
        })
    ;
  },
  methods: {
    paginate(link, index) {
      fetch(link, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit', // Utilisez 'omit' pour ne pas envoyer les cookies
      })
          .then((response) => response.json())
          .then((json) => {
            this.store.page = this.store.page + index
            this.store.page = (this.store.page === 0) ? 1 : ((this.store.page > this.store.maxPage) ? this.store.maxPage : this.store.page)
            this.store.comments = json["member"];
            this.store.totalComments = +json["totalItems"];
            this.store.next = json["view"]["next"] ?? json["view"]["last"];
            this.store.prev = json["view"]["previous"] ?? json["view"]["first"];
            this.isData = (this.store.totalComments > 0)
          })
      ;
    },
    refresh() {
      fetch("/api/messages?order[createdAt]=desc", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit', // Utilisez 'omit' pour ne pas envoyer les cookies
      })
          .then((response) => response.json())
          .then((json) => {
            this.store.page = 1;
            this.store.comments = json["member"];
            this.store.totalComments = +json["totalItems"];
            this.store.next = json["view"]["next"] ?? json["view"]["last"];
            this.store.prev = json["view"]["previous"] ?? json["view"]["first"];
            this.isData = (this.store.totalComments > 0)
          })
      ;
    },
    goInbox() {
      this.isInbox = true;
      this.isReply = false;
    },
    cancelReply() {
      this.isInbox = true;
      this.isReply = false;
    },
    goDetail(comment) {
      this.store.activeComment = comment;
      this.isInbox = false;
    },
    goReply(comment) {
      this.store.activeComment = comment;
      this.isInbox = false;
      this.isReply = true;
    },
    formatDate(date) {
      return format(date, 'dd MMMM yyyy HH:mm:ss', {locale: fr}); // Exemple : 31 octobre 2024 14:30:45
    },
    truncater(value, length) {
      if (!value) return '';
      if (value.length <= length) return value;
      return value.substring(0, length) + '...';
    },
    ago(value) {
      if (!value) return '';
      // Utilisation de la fonction date-fns pour formater la date en fonction du temps écoulé
      return formatDistanceToNow(new Date(value), {addSuffix: true, locale: fr});
    },
    search(q) {
      fetch("/api/messages?q=" + q + "&order[createdAt]=desc", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Autres en-têtes si nécessaire
        },
        credentials: 'omit', // Utilisez 'omit' pour ne pas envoyer les cookies
      })
          .then((response) => response.json())
          .then((json) => {
            this.store.page = 1;
            this.store.comments = json["member"];
            this.store.totalComments = +json["totalItems"];
            this.store.next = json["view"]["next"] ?? json["view"]["last"];
            this.store.prev = json["view"]["previous"] ?? json["view"]["first"];
            this.isData = (this.store.totalComments > 0)
          })
      ;
    },
    delete() {
      const storeId = +this.store.idStore;
      let item;
      if (this.isInbox) {
        if (this.selectedComment.length > 0) {
          item = this.selectedComment
        }
      } else {
        item = this.store.activeComment.id
      }
      if (item) {
        Swal.fire({
          title: 'En êtes vous sûre?',
          text: "Cette action est irréversible!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimer !',
          cancelButtonText: 'Non, Annuler!',
          customClass: {
            confirmButton: 'btn btn-success mt-2',
            cancelButton: 'btn btn-danger ms-2 mt-2',
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.value) {

            Swal.fire({
              title: '<div class="spinner-border text-primary m-1" role="status">\n' +
                  '            <span class="sr-only">Loading...</span>\n' +
                  '          </div>',
              icon: 'info',
              showCloseButton: false,
              showCancelButton: false,
              showConfirmButton: false
            })

            const data = {
              items: item // Envoi le tableau sous la clé 'items'
            };

            fetch('/admin/messages/delete', {
              method: 'POST', // Méthode HTTP
              headers: {
                'Content-Type': 'application/json' // Indiquer le type de contenu
              },
              body: JSON.stringify(data) // Convertir l'objet en chaîne JSON
            })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Erreur dans la requête: ' + response.statusText);
                  }
                  return response.json(); // Traiter la réponse en JSON
                })
                .then(data => {
                  fetch("/api/messages?order[createdAt]=desc", {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      // Autres en-têtes si nécessaire
                    },
                    credentials: 'omit', // Utilisez 'omit' pour ne pas envoyer les cookies
                  })
                      .then((response) => response.json())
                      .then((json) => {
                        this.store.page = 1;
                        this.store.comments = json["member"];
                        this.store.totalComments = +json["totalItems"];
                        this.store.next = json["view"]["next"] ?? json["view"]["last"];
                        this.store.prev = json["view"]["previous"] ?? json["view"]["first"];
                        this.isData = (this.store.totalComments > 0)
                        Swal.fire({
                          title: 'Succès!',
                          text: 'Le commentaire a été supprimé',
                          icon: 'success',
                        }) // Gérer la réponse
                      })
                })
                .catch(error => {
                  console.error('Erreur:', error); // Gérer les erreurs
                })
          } else if (
              // Read more about handling dismissals
              result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire({
              title: 'Annulé',
              text: 'Aucune action n\'a été éffectuée :)',
              icon: 'error',
            })
          }
        });
      }
    },
    reply() {
      Swal.fire({
        title: '<div class="spinner-border text-primary m-1" role="status">\n' +
            '            <span class="sr-only">Loading...</span>\n' +
            '          </div>',
        icon: 'info',
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false
      })

      const data = {
        to: this.store.activeComment.email,
        subject: this.store.subject,
        message: this.store.msg
      }

      fetch('/admin/messages/reply', {
        method: 'POST', // Méthode HTTP
        headers: {
          'Content-Type': 'application/json' // Indiquer le type de contenu
        },
        body: JSON.stringify(data) // Convertir l'objet en chaîne JSON
      })
          .then(response => {
            if (!response.ok) {
              Swal.fire({
                title: 'Erreur',
                text: 'Vérifiez votre message :)',
                icon: 'error',
              })
              throw new Error('Erreur dans la requête: ' + response.statusText);
            }
            return response.json(); // Traiter la réponse en JSON
          })
          .then(data => {
            fetch("/api/messages?order[createdAt]=desc", {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                // Autres en-têtes si nécessaire
              },
              credentials: 'omit', // Utilisez 'omit' pour ne pas envoyer les cookies
            })
                .then((response) => response.json())
                .then((json) => {
                  this.store.page = 1;
                  this.store.comments = json["member"];
                  this.store.totalComments = +json["totalItems"];
                  this.store.next = json["view"]["next"] ?? json["view"]["last"];
                  this.store.prev = json["view"]["previous"] ?? json["view"]["first"];
                  this.isData = (this.store.totalComments > 0)
                  this.store.msg = ""
                  this.store.subject = ""
                  Swal.fire({
                    title: 'Succès!',
                    text: 'La réponse a été envoyé',
                    icon: 'success',
                  }) // Gérer la réponse
                  this.goInbox()
                })
          })
          .catch(error => {
            console.error('Erreur:', error); // Gérer les erreurs
          })
    }
  }
}
</script>

<style scoped>

</style>