const router = new VueRouter({
  	routes: [
  	  { path: '/', name: 'home' },
      { path: '/entrar', name: 'entrar' },
      { path: '/cadastro', name: 'cadastro' },
      { path: '/dashboard', name: 'dashboard' },
      { path: '/logout', name: 'logout' },
  	  { path: '/sobre', name: 'sobre' },
  	  { path: '/instituicao/:id', name: 'instituicao' },
  	  { path: '/curso/:id', name: 'curso' },
  	  { path: '/caderno/:id', name: 'caderno' },
  	  { path: '/anotacao/:id', name: 'anotacao' },
  	  { path: '*', name: 'notFound' }
    ]
})

Vue.mixin({
  methods: {
    slugify: function (str) { 
      return str.toString().toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
    }
  }
})

new Vue({
  el: '#app',
  router: router,
  data: {
    user: Auth.getCurrentUser(),
    currentView: 'home',
    showModal: false,
    menu: [ 
      { name: "Dashboard", url: "#/dashboard", icon: "dashboard"},
      // { name: "Perfil", url: "#/profile", icon: "person"},
      { name: "Sair", url: "#/logout", icon: "input"}
    ]
  },
  created: function () {
    this.changeView()
  },
  watch: {
    '$route': 'changeView'
  },
  methods: {
  	changeView: function(){
  		var path = this.$route.path
  		if(path === '/'){
			 this.currentView = 'home'
      } else if(path === '/entrar'){
       this.currentView = 'entrar'
      } else if(path === '/cadastro'){
       this.currentView = 'cadastro'
      } else if(path === '/dashboard'){
       this.currentView = 'dashboard'
  		} else if(path === '/logout'){
        this.currentView =  'logout'
      } else if(path === '/sobre'){
        this.currentView =  'sobre'
      } else if(path.startsWith('/instituicao/')){
			 this.currentView = 'instituicao'
  		} else if(path.startsWith('/curso/')){
			 this.currentView = 'curso'
  		} else if(path.startsWith('/caderno/')){
			 this.currentView = 'caderno'
  		} else if(path.startsWith('/anotacao/')){
			 this.currentView = 'anotacao'
  		} else {
			 this.currentView =  'notFound'
  		}
  	}
  },
  components: {
    home: httpVueLoader('js/components/home.vue'),
    entrar: httpVueLoader('js/components/entrar.vue'),
    cadastro: httpVueLoader('js/components/cadastro.vue'),
    dashboard: httpVueLoader('js/components/dashboard.vue'),
    logout: httpVueLoader('js/components/logout.vue'),
    sobre: httpVueLoader('js/components/sobre.vue'),
    instituicao: httpVueLoader('js/components/instituicao.vue'),
    curso: httpVueLoader('js/components/curso.vue'),
    caderno: httpVueLoader('js/components/caderno.vue'),
    anotacao: httpVueLoader('js/components/anotacao.vue'),
    notFound: httpVueLoader('js/components/notFound.vue')
  }
})

// Auth.login("teste12@teste.com", "123",
//     function(obj) {
//       console.log(obj)
//       console.log(Auth.isLoggedIn())
//     },
//     function(error) {
//       console.log(error)
//     }
// )

// Auth.logout(function(){
//   console.log(Auth.isLoggedIn())
// })

// Auth.signup({
//     "name": "nome4",
//     "email": "nome4@nome.com",
//     "username": "nome4@nome.com",
//     "password": "123"
//   },
//   function(obj) {
//     console.log(obj)
//     console.log(Auth.isLoggedIn())
//   },
//   function(error) {
//     console.log(error)
//   }
// )

// Auth.facebookLogin(
//   function(obj) {
//     console.log(obj)
//     console.log(Auth.isLoggedIn())
//   },
//   function(error) {
//     console.log(error)
//   }
// )
  

// Api.create({
//       "nome": "Disciplina Teste",
//       "descricao": "Descrição Teste"
//       "curso": 
//     }, 
//     new DisciplinaClass(),
//     function(obj) {
//       alert('New object created with objectId: ' + obj.id);
//     },
//     function(error) {
//       alert('Failed to create new object, with error code: ' + error.message);
//     }
// )


// Api.getById("FKwSvSKtNc", DisciplinaClass, 
//   function(disciplina){
//     Api.create({
//         "assunto": "Assunto X",
//         "texto": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
//         "disciplina": disciplina
//       }, 
//       new AnotacaoClass()
//     )
//     Api.create({
//         "assunto": "Assunto Y",
//         "texto": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//         "disciplina": disciplina
//       }, 
//       new AnotacaoClass()
//     )
//     Api.create({
//         "assunto": "Assunto Z",
//         "texto": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
//         "disciplina": disciplina
//       }, 
//       new AnotacaoClass()
//     )
//   },
//   function(error) {
//     console.log('Failed to create new object, with error code: ' + error.message);
//   }
// )

// Api.getByKey("assunto", "variareis php", AnotacaoClass,
//   function(obj) {
//     Api.delete(obj)
//   },
//   function(error) {
//     console.log('Failed to create new object, with error code: ' + error.message);
//   }
// )

// Api.getAll(InstituicaoClass, "nome",
//    function(obj) {
//     console.log(obj);
//     console.log(obj[11].get("nome"));
//   },
//   function(error) {
//     console.log('Failed to create new object, with error code: ' + error.message);
//   }
// )