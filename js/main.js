Vue.component('task', {
  template:'<li><slot></slot></li>'
});

Vue.component('task-list', {
  template:'<div><task v-for="task in tasks">{{ task.task }}</task></div> ',

  data() {
    return {
      tasks: [
        { task: 'Go to the store', complete: true },
        { task: 'Finish homework', complete: false }
      ]
    }
  }
});

Vue.component('welcome', {
  template: `
    <div class="main-header">
      <h2 id="logo" class="logo">Welcome to</h2>
      <h1 class="logo"> {{ name }}</h1>
    </div>
  `,
  props: {
    'name' : {required: true}
  }
})

Vue.component('message', {
  props: ['title', 'body'],
  data() {
    return {
      isVisible: true
    };
  },

  template: '<article v-show="isVisible" class="message"><div class="message-header"> {{ title }}<button class="delete" aria-label="delete" @click="isVisible = false"></button></div><div class="message-body">{{ body }}</div></article>'

});

Vue.component('login-modal', {
  template:
  `<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
      <button class="modal-close is-large"  @click="$emit('close')"></button>
    </header>
    <section class="modal-card-body">
        <input class="input is-rounded" type="text" placeholder="Phone number">
        </br></br>
        <input class="input is-rounded" type="text" placeholder="Password">
        </br>
        <div class="submit-container">
        <label><input type="checkbox" checked="checked"> keep me signed in</label>
        </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="$emit('login')">Log In</button>
    </footer>
  </div>
</div>`
})

Vue.component('signup-modal', {
  template:
  `<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Sign Up</p>
      <button class="modal-close is-large"  @click="$emit('close')"></button>
    </header>
    <section class="modal-card-body">
        <input class="input is-rounded" type="text" placeholder="Phone number">
        </br></br>
        <input class="input is-rounded" type="text" placeholder="Password">
        </br>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="phoneNumber = $emit('login')">Sign Up</button>
    </footer>
  </div>
</div>`
})

// Vue.component('newbrew-modal', {
//   template:
//   `<div class="modal is-active">
//   <div class="modal-background"></div>
//   <div class="modal-card">
//     <header class="modal-card-head">
//       <p class="modal-card-title">Create your new drink</p>
//     </header>
//     <section class="modal-card-body">
//       <div class="field">
//         <label class="label">Brew Name</label>
//         <div class="control">
//           <input class="input" type="text" ref="drinkname" placeholder="Name of your brew">
//         </div>
//       </div>
//
//       <div class="field">
//         <label class="label">Pressure (bar)</label>
//         <div class="control">
//           <div class="select">
//             <select>
//               <option>8</option>
//               <option>9</option>
//               <option>10</option>
//               <option>11</option>
//               <option>12</option>
//             </select>
//           </div>
//         </div>
//       </div>
//
//       <div class="field">
//         <label class="label">Temperature (C)</label>
//         <div class="control">
//           <div class="select">
//             <select>
//               <option>80</option>
//               <option>85</option>
//               <option>90</option>
//               <option>95</option>
//               <option>100</option>
//             </select>
//           </div>
//         </div>
//       </div>
//
//       <div class="field">
//         <label class="label">Time (sec)</label>
//         <div class="control">
//           <div class="select">
//             <select>
//               <option>15</option>
//               <option>20</option>
//               <option>25</option>
//               <option>30</option>
//               <option>35</option>
//             </select>
//           </div>
//         </div>
//       </div>
//
//       <div class="field">
//         <div class="control">
//           <label class="radio">
//             <input type="radio" name="question">
//             Espresso
//           </label>
//           <label class="radio">
//             <input type="radio" name="question">
//             Americano
//           </label>
//         </div>
//       </div>
//     </section>
//     <footer class="modal-card-foot">
//     <div class="field is-grouped">
//       <div class="control">
//         <button class="button is-link" @click="sendNewBrew(); $emit('create')">Submit</button>
//       </div>
//       <div class="control">
//         <button class="button is-text" @click="$emit('close')">Cancel</button>
//       </div>
//     </div>
//     </footer>
//   </div>
// </div>`,
//
//   data() {
//     return {
//       drinkname:
//     };
//   },
//   methods: {
//     sendNewBrew(){
//
//         console.log("sendNewBrew");
//
//         var ES = document.getElementById('ES').checked;
//         var AM = document.getElementById('AM').checked;
//         var name = document.getElementById('drinkname').value;
//         var temp = document.getElementById('temperature').value;
//         var pressure = document.getElementById('pressure').value;
//         var time = document.getElementById('time').value;
//         var type = null;
//
//         if(ES == true)
//           type = 'ES';
//         else
//           type = 'AM';
//
//         var xmlHttp = new XMLHttpRequest();
//         var theUrl = 'http://buakpsi.com/ubru/drinks/';
//
//         xmlHttp.open("POST", theUrl, true); // true for asynchronous
//         xmlHttp.setRequestHeader('Content-Type', 'application/json');
//         xmlHttp.send(JSON.stringify({
//           uuid: "123456",
//           name: name,
//           temp: parseInt(temp),
//           pressure: parseInt(pressure),
//           time: parseInt(time),
//           type: type
//         }));
//
//     }
//   }
// })

Vue.component('tabs', {
  template: `
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" v-if="true" :class="{'is-active' : tab.isActive}">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
      </ul>
    </div>

    <div class="tabs-details center">
      <slot></slot>
    </div>
  </div>
  `,

  data() {
    return {
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    },

    // renderTabs(selectedTab, loginState) {
    //   if(loginState) {
    //     if(selectedTab.name == "Sign In") {
    //       console.log("sign in hide")
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   } else {
    //     if(selectedTab.name == "Your Brews") {
    //       console.log("brews hide")
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }
    // }
  }
});

Vue.component('tab', {
  template:`
    <div v-show="isActive"><slot></slot></div>
  `,

  props: {
    name: {required: true},
    selected: { default: false}
  },

  data() {
    return {
      isActive: this.selected,
    }
  },

  mounted() {
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, `-`);
    }
  }
});

var app = new Vue({
  el: '#root',

  data: {
    showModalLogin: false,
    showModalSignup: false,
    showModalNewbrew: false,
    loggedIn: false,
    phoneNumber: ''
  },
  methods: {
    populateTable: function() {
      alert("HELLO");


    },
    sendNewBrew: function() {
      //alert("New brew!")

      var ES = document.getElementById('ES').checked;
      var AM = document.getElementById('AM').checked;
      var name = document.getElementById('drinkname').value;
      var temp = document.getElementById('temperature').value;
      var time = document.getElementById('size').value;
      var type = null;
      var pressure = "80";

      if(ES == true)
        type = 'ES';
      else
        type = 'AM';

      //alert("name is: "+name+". type is: " + type+". temp is: "+ temp+". time is: "+time);

      var xmlHttp = new XMLHttpRequest();
      var theUrl = 'http://ubru.us-east-1.elasticbeanstalk.com/drinks/phone/911';


      // ERROR: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access. The response had HTTP status code 500.
      // https://github.com/axios/axios/issues/569
      xmlHttp.open("POST", theUrl, true); // true for asynchronous
      xmlHttp.setRequestHeader('Content-Type', 'application/json');
      xmlHttp.send(JSON.stringify({
        name: name,
        brew_type: type,
        brew_temp: parseInt(temp),
        brew_size: size
      }));
    }
  }
});



// function populateTable(){
//     console.log("in populateTable function...");
//     // var xmlHttp = new XMLHttpRequest();
//     // xmlHttp.onreadystatechange = function() {
//     //
//     //   console.log(xmlHttp);
//     //
//     //   if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//     //     populateCallback(xmlHttp.responseText);
//     // }
//     //
//     // console.log("populateTable");
//     //
//     // var theUrl = 'http://ubru.us-east-1.elasticbeanstalk.com/drinks/phone/911';
//     //
//     // xmlHttp.open("GET", theUrl, false); // true for asynchronous
//     // xmlHttp.send(null);
//
//
// }
