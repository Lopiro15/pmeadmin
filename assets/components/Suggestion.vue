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
                <td class="text-muted text-center">Aucune Suggestion</td>
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
              <h3>Detail Suggestion</h3>
              <div class="ms-auto d-none d-md-flex fs-18">
                <a href="javascript:;" @click.prevent="goInbox" class="contact-icon text-primary"
                   data-bs-toggle="tooltip" title="" data-bs-original-title="Tag" aria-label="Inbox"><i
                    class="fe fe-inbox"></i></a>
              </div>
            </div>
            <div class="media mt-0">
              <div class="main-img-user avatar-md me-3 online">
                <img alt="avatar" class="rounded-circle"
                     :src="'https://ui-avatars.com/api/?background=random&font=000&name=unknown'">
              </div>
              <div class="media-body tx-inverse">
                <div class="float-end d-none d-md-flex fs-15">
                  <div class="me-3">{{ formatDate(this.store.activeComment.createdAt) }}</div>
                </div>
                <div class="media-title font-weight-normal"><span
                    class="tx-18 tx-medium">Inconnu</span>
                  <p class="mb-0 text-muted">Inconnu</p>
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
          <!--          <a class="btn btn-sm ripple btn-secondary mt-1 mb-1" href="javascript:;"><i class="fa fa-share"></i> Forward</a>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {useSuggestionStore} from "../stores/suggestionStore";
import {formatDistanceToNow} from 'date-fns';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import Swal from 'sweetalert2';

export default {
  name: "Suggestion",
  data() {
    return {
      store: useSuggestionStore(),
      selectedComment: [],
      isInbox: true,
      isData: false,
      isReply: false
    }
  },
  mounted() {
    fetch("/api/suggestions?order[createdAt]=desc", {
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
      fetch("/api/suggestions?order[createdAt]=desc", {
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
    goDetail(comment) {
      this.store.activeComment = comment;
      this.isInbox = false;
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
      fetch("/api/suggestions?content=" + q + "&order[createdAt]=desc", {
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

            fetch('/admin/suggestion/delete', {
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
                  fetch("/api/suggestions?order[createdAt]=desc", {
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
                          text: 'Les suggestions a été supprimé',
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
  }
}
</script>

<style scoped>

</style>