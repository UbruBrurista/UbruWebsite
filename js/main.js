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
        <input id="phone-number" class="input is-rounded" type="text" placeholder="Phone number">
        </br></br>
        <input class="input is-rounded" type="text" placeholder="Password">
        </br>
        <div class="submit-container">
        <label><input type="checkbox" checked="checked"> keep me signed in</label>
        </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="verifyLogin(); $emit('login')">Log In</button>
    </footer>
  </div>
</div>`,

  methods : {
    verifyLogin : function() {
      this.$parent.$data.phoneNumber = document.getElementById('phone-number').value;
    }
  }
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
    populateTable: function(){
        var xmlHttp = new XMLHttpRequest();
        console.log('xmlHttp!!!!: ');
        console.log(xmlHttp);
        console.log(xmlHttp.readyState + ', '+ xmlHttp.status);
        console.log(xmlHttp.responseText);

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          console.log('IN THE IF!!!');
          var brews = JSON.parse(xmlHttp.responseText);
          console.log('BREWs: ' + brews);
          console.log(brews.length);

          var myTable = document.getElementById('brewList');

          for (i = 0; i < brews.length; i++) {
            var tr = document.createElement('TR');
            var x = tr.insertCell(0);
            x = tr.insertCell(1);
            x = tr.insertCell(2);
            x = tr.insertCell(3);
            x = tr.insertCell(4);
            x = tr.insertCell(5);

            tr.cells[0].innerHTML = brews[i]['name'];
            tr.cells[1].innerHTML = brews[i]['brew_temp'];
            tr.cells[2].innerHTML = brews[i]['brew_size'];
            tr.cells[3].innerHTML = brews[i]['brew_type'];
            tr.cells[4].innerHTML = '<a href="#">Edit</a>';

            myTable.appendChild(tr);
         }
        }


        var theUrl = 'http://ubru.us-east-1.elasticbeanstalk.com/drinks/phone/' + this.$data.phoneNumber;
        console.log("url: " + theUrl);

        xmlHttp.open("GET", theUrl, false); // true for asynchronous
        xmlHttp.send(null);


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
      var phoneN = this.$data.phoneNumber;

      if(ES == true)
        type = 'ES';
      else
        type = 'AM';

      //alert("name is: "+name+". type is: " + type+". temp is: "+ temp+". time is: "+time);

      var xmlHttp = new XMLHttpRequest();
      var theUrl = 'http://ubru.us-east-1.elasticbeanstalk.com/drinks/';


      // ERROR: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access. The response had HTTP status code 500.
      // https://github.com/axios/axios/issues/569
      xmlHttp.open("POST", theUrl, true); // true for asynchronous
      xmlHttp.setRequestHeader('Content-Type', 'application/json');
      xmlHttp.send(JSON.stringify({
        name: name,
        number: phoneN,
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
