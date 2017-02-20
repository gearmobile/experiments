<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <app-switch></app-switch>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email" class="form-control" v-model.lazy.trim="userData.userEmail">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model.lazy="userData.userPassword">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" class="form-control" v-model.lazy.number="userData.userAge">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <textarea id="message" rows="5" class="form-control" v-model.lazy.trim="userData.userMessage"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail">Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail">Send Infomail
            </label>
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
            <label for="male">
              <input type="radio" id="male" value="Male" v-model="gender">Male
            </label>
            <label for="female">
              <input type="radio" id="female" value="Female" v-model="gender">Female
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
            <label for="priority">Priority</label>
            <select id="priority" class="form-control" v-model="selectValue">
              <option v-for="item in levels" :selected="item === 'Medium'">{{ item }}</option>
            </select>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button class="btn btn-primary">Submit!</button>
          </div>
        </div>
    </form>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
              <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.userEmail }}</p>
            <p>Password: {{ userData.userPassword }}</p>
            <p>Age: {{ userData.userAge }}</p>
            <p style="white-space: pre">Message: {{ userData.userMessage }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectValue }}</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swicth from './components/switch.vue';

  export default {
    name: 'app',
    data() {
      return {
        userData: {
          userEmail: '',
          userPassword: '',
          userAge: 28,
          userMessage: 'Enter your text here ...',
        },
        sendMail: [],
        gender: 'Male',
        levels: [ 'Hight', 'Medium', 'Low' ],
        selectValue: 'Hight',
      }
    },
    components: {
      appSwitch: Swicth,
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
